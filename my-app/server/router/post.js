const express = require("express");
const postcontroller = require("../controller/postcontroller");
const Router = express.Router();

Router.get("/", postcontroller.findAllPost);

module.exports = Router;