require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("연결 성공"))
  .catch((e) => console.log(e, ": 실패"));

app.listen(PORT, () => {
  console.log("Server is running");
});
