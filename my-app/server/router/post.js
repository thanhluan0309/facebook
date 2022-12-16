const express = require("express");
const postcontroller = require("../controller/postcontroller");
const Post = require("../model/post");
const Router = express.Router();

//create
Router.post("/create", postcontroller.creatPost);
//update
//delete
//get a post
//get timeline


module.exports = Router;