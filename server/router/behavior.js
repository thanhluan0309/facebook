const behavior = require("../controller/behaviorController");

const router = require("express").Router();
const verifyToken = require("../midleware/user");
router.post("/", verifyToken, behavior.createBehavior);
router.put("/:id",behavior.UpdateBy_id);
router.get("/:id",behavior.getOneBehaviorPublicBY_Postid)
module.exports = router;
