const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
const Routeruser = require("./router/user");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Url);
    console.log("connect Db success");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.Port, () => {
  console.log(`Server running at port ${process.env.Port}`);
});
connectDB();
app.use("/user", Routeruser);
app.get("/", (req, res) => {
  res.send("hello word");
});
