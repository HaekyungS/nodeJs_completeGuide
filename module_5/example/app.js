const express = require("express");

const app = express();

// 미들웨어 이해하기
app.use((req, res, next) => {
  console.log("미들웨어?");
  next();
});

app.use((req, res, next) => {
  console.log("미들웨어  not next");
  // res.send("보내봐바");
  next();
});

app.use((req, res, next) => {
  console.log("미들웨어3");
  res.send("뭐가 나올까?");
});

// app.get("/", function (req, res) {
//   res.send("hello world");
// });

app.listen(3000, () => {
  console.log("open on port 3000");
});
