const express = require("express");
const postcontroller = require("../controller/Postcontroller");
const Post = require("../model/post");
const Router = express.Router();

//create
Router.post("/create", postcontroller.addPost);
Router.get("/user/:id", postcontroller.getPostByUser );


module.exports = Router;
