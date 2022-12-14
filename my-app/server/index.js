const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
const Routeruser = require("./router/user");
const Routerpost = require("./router/post");
const Post = require("./model/post");
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
app.use("/post", Routerpost);
app.get("/all-post",(req, res)=>{
  Post.find().then((result)=>{
    res.send(result);
  }).catch((err)=>{
    console.log(err);
  })
})
app.get("/", (req, res) => {
  res.send("hello word");
});
