const express = require("express");
const behaviorcontroller = require("../controller/behaviorcontroller");
const Router = express.Router();

Router.post("/create", behaviorcontroller.createBehavior);
Router.get("/",behaviorcontroller.getAllBehavior);
Router.get("/like/:id",behaviorcontroller.getBehaviorByUser);

module.exports = Router;