const express = require("express");
const router = express.Router();
const database = require("../api/firebase-admin");

const dbRef = database.ref("/");

router.post('/write',(req,res)=>{
    const uid = req.body.uid;
    const student = {
        uid,
    }
   
})

router.post("/check", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
