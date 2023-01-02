const post = require("../controller/Postcontroller");

const router = require("express").Router();
const verifyToken = require("../midleware/user");
router.post("/", post.addPost);
router.get("/", post.getAllPost);
module.exports = router;
