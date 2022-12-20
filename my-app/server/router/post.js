const express = require("express");
const postcontroller = require("../controller/postcontroller");
const Post = require("../model/post");
const Router = express.Router();

//create
Router.post("/create", postcontroller.createPost);
Router.get("/user/:id", postcontroller.getPostByUser );


module.exports = Router;