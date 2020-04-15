const express = require("express");
const router = express.Router();
const database = require("../api/firebase-admin");
const dbRef = database.ref("/");

// 註冊用戶
router.post("/register", (req, res) => {
  const uid = req.body.uid;
  const student = {
    uid: uid,
    auth: true,
    already: false,
    come_time: "never",
    out_time: "never",
  };
  dbRef
    .push(student)
    .then(() => {
      res.send({
        success: true,
        message: "註冊成功",
        uid: uid,
      });
    })
    .catch(() => {
      res.send({
        success: false,
        message: "操作失敗，請重新在試一次",
      });
    });
});

// 檢查用戶
router.post("/check", (req, res) => {
  const uid = req.body.uid;
  dbRef.once("value", (snapshot) => {
    const data = snapshot.val();
    let pass = false;
    let userData;
    let index;
    for (const [key, value] of Object.entries(data)) {
      if (value.uid === uid && value.auth === true) {
        pass = true;
        userData = value;
        index = key;
        break;
      }
    }
    if (pass) {
      const timestamp = Date.now();
      if (!userData.already) {
        dbRef
          .child(index)
          .update({
            come_time: timestamp,
            already: true,
          })
          .then(() => {
            res.send({
              success: true,
              messgae: "通過驗證，以紀錄進入時間",
              time: timestamp,
            });
          });
      } else {
        dbRef
          .child(index)
          .update({
            out_time: timestamp,
            already: false,
          })
          .then(() => {
            res.send({
              success: true,
              messgae: "通過驗證，以紀錄離開時間",
              time: timestamp,
            });
          });
      }
    } else {
      res.send({
        success: false,
        message: "此用戶沒有權限進入，請連絡相關管理員",
      });
    }
  });
});

module.exports = router;
