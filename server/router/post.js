const post = require("../controller/Postcontroller");

const router = require("express").Router();
const verifyToken = require("../midleware/user");
router.post("/", post.addPost);
router.get("/", post.getAllPost);

router.get("/:id",post.getPostByID);
router.get("/user/:id", post.getPostByUser );
router.put("/update/:id",post.updatePost);
router.delete("/delete/:id",post.deletePost);
module.exports = router;
