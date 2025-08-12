require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser"); // express 에서 쿠키 해석을 돕는 서드파티
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/auth", userRoutes); // 다중요청 분산처리

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MONGE DB 연결 성공!"))
  .catch((e) => console.log(e, ": 실패"));

app.listen(PORT, () => {
  console.log("Server is running");
});
