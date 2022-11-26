const express = require("express");
const usercontroller = require("../controller/usercontroller");
const Router = express.Router();

Router.post("/", usercontroller.register);

module.exports = Router;
