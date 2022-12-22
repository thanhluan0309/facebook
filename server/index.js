const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const routeruser = require("./router/user");
const routerPost = require("./router/post");
const routerBehavior = require("./router/behavior")
app.use(cors());
dotenv.config();
const ConnectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB has connect");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
app.use(express.json());
ConnectDB();
const Port = process.env.PORT;
app.listen(Port, () => {
  console.log("server ruuning port", Port);
});
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/user", routeruser);

app.use("/post", routerPost);

app.use("/behavior", routerBehavior);
