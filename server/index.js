const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const formidable = require("formidable");
const routeruser = require("./router/user");
const routerPost = require("./router/post");
const routerBehavior = require("./router/behavior");
app.use(cors());
dotenv.config();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.post("/", (req, res, next) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
  });
});
app.get("/", (req, res) => {
  res.send(`
      <h2>With <code>"express"</code> npm package</h2>
      <form action="/post" enctype="multipart/form-data" method="post">
        <div>Text field title: <input type="text" name="title" /></div>
        <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
        <input type="submit" value="Upload" />
      </form>
    `);
});
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/user", routeruser);

app.use("/post", routerPost);

app.use("/behavior", routerBehavior);
