const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
app.use(cors());
const Routeruser = require("./router/user");
const Routerpost = require("./router/post");
const Routercomment = require("./router/comment");
const Routerbehavior = require("./router/behavior");
const Post = require("./model/post");
var bodyParser = require("body-parser");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.Url);
    console.log("connect Db success");
  } catch (error) {
    console.log(error);
  }
};

app.use(bodyParser.json({limit:"500mb"}));
app.use(cors());

app.listen(process.env.Port, () => {
  console.log(`Server running at port ${process.env.Port}`);
});
connectDB();



app.use("/user", Routeruser);
app.use('/post', Routerpost);
app.use("/comment", Routercomment);
app.use('/behavior',Routerbehavior);

app.get("/post/all-post",(req, res)=>{
  Post.find().then((result)=>{
    res.send(result);
  }).catch((err)=>{
    console.log(err);
  })
})

app.get("/", (req, res) => {
  res.send("hello word");
});
