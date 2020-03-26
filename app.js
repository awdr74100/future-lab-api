const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user/check", (req, res) => {
  const userId = req.body.userId;
  const time = new Date().getTime();
  if (userId === "n1") {
    res.send({
      id: userId,
      date: time,
      success: true,
      message: "此用戶無違規紀錄，成功進入"
    });
  } else if (userId === "n2") {
    res.send({
      id: userId,
      date: time,
      success: false,
      message: "此用戶尚未有權限，請聯絡門禁管理員"
    });
  } else if (userId === "n3") {
    res.send({
      id: userId,
      date: time,
      success: false,
      message: "此用戶權限遭到移除，請聯絡門禁管理員"
    });
  }
});

app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    msg: "你所查詢的 API 不存在，請在檢查看看"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`開啟 port 為 ${port} 的 localhost`);
});
