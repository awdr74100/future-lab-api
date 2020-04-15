const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const user = require("./routes/user");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// router
app.use("/user", user);

// warn
app.use((req, res, next) => {
  res.status(404).send("你所查詢的 API 不存在，請在檢查看看");
});

app.use((err, res, req, next) => {
  res.send("伺服器有些問題，請稍後在試");
});

// open localhost
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`已開啟 PORT 為 ${port} 的本地伺服器`);
});
