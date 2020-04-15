const express = require("express");
const router = express.Router();
const db = require("../api/firebase-admin");


router.post("/check", (req, res) => {
  res.send("Hello World");
});

module.exports = router;
