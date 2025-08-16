require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser"); // express 에서 쿠키 해석을 돕는 서드파티
const cors = require("cors");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/auth", userRoutes); // 다중요청 분산처리
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/check-ip", (req, res) => {
  const clientIP = req.ip || req.connection.remoteAddress;
  const blacklistedIPs = JSON.parse(precess.env.IP_BLACKLIST || "[]");

  console.log("Client IP:", clientIP);
  console.log("Blacklisted IPs:", blacklistedIPs);

  if (blacklistedIPs.includes(clientIP)) {
    return res
      .status(403)
      .json({ allowed: false, message: "Access denied - IP is blacklisted" });
  }

  res.json({ allowed: true });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MONGE DB 연결 성공!"))
  .catch((e) => console.log(e, ": 실패"));

app.listen(PORT, () => {
  console.log("Server is running");
});
