const behavior = require("../controller/behaviorController");

const router = require("express").Router();
const verifyToken = require("../midleware/user");
router.post("/", verifyToken, behavior.createBehavior);
<<<<<<< HEAD
router.put("/:id",verifyToken,behavior.UpdateBy_Postid);
router.get("/:id",behavior.getOneBehaviorPublicBY_Postid);
router.get("/like/:id",behavior.getBehaviorByUser);

=======
router.put("/:id",behavior.UpdateBy_id);
router.get("/:id",behavior.getOneBehaviorPublicBY_Postid)
>>>>>>> luan
module.exports = router;
