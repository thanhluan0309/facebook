const post = require("../controller/Postcontroller");

const router = require("express").Router();
const verifyToken = require("../midleware/user");
router.post("/", verifyToken, post.addPost);

module.exports = router;
