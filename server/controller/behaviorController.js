const behaviors = require("../model/behavior");
class PostController {
   async createBehavior(req , res){
    try{
       const newBehavior = new behaviors(req.body);
       const savedBehavior = await newBehavior.save();
       res.status(200).json(savedBehavior);
    }catch(err){
       res.status(500).json(err);
    }
 }
 async getAllBehavior(req, res){
    try {
      behaviors.find().then((result)=>{
          res.send(result);
       });
    } catch (err) {
       res.status(500).json(err);
       console.log(err);
    }
 }
 async getBehaviorByUser(req, res){
    try { 
      behaviors.find({
          like:
          {$elemMatch:{'user': req.params.id}}
       }).populate('post').then((result)=>{
          res.send(result);
       });
    } catch (error) {
       res.status(500).json(error);
    }
 }
  async createBehavior(req, res) {
    try {
      const { like, comment, post } = req.body;
      const newbehaviors = behaviors({
        like: like,
        comment: comment,
        post: post,
        user: req.UserExit,
      });
      await newbehaviors.save();
      return res.status(200).json({
        success: true,
        message: "create behavior success",
        newbehaviors: newbehaviors,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //   async getAllschedule(req, res) {
  //     try {
  //       const schedulePublic = await Schedule.find({ ispublic: true });

  //       const schedulePrivate = await Schedule.find({ ispublic: false });
  //       return res.status(200).json({
  //         success: true,
  //         schedulepublic: schedulePublic,
  //         scheduleprivate: schedulePrivate,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  async getOneBehaviorPublicBY_Postid(req, res) {
    try {
      const BehaviorPublic = await behaviors.findOne({ post: req.params.id });
      return res.status(200).json({
        success: true,
        BehaviorPublic: BehaviorPublic,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
      });
    }
  }
  //   async DeletedBY_id(req, res) {
  //     try {
  //       await Schedule.findOneAndDelete({
  //         _id: req.params.id,
  //       });
  //       return res.status(200).json({
  //         success: true,
  //         message: "Hoàn tất việc xóa",
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  async UpdateBy_id(req, res) {
    try {
      const { like, comment } = req.body;
      const behaviorfind = await behaviors.findById({
        _id: req.params.id,
      });
    
      if (like) {
        behaviorfind.like.push(like);
      }
      if (comment) {
        behaviorfind.comment.push(comment);
      }

      const newbehaviors = {
        like: behaviorfind.like,
        comment: behaviorfind.comment,
      };
      const updateBehavior = await behaviors.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        newbehaviors,
        { new: true }
      );
      await updateBehavior.save();
      return res.status(200).json({
        success: true,
        message: "Cập nhật thành công",
        updateBehavior: updateBehavior,
      });
    } catch (error) {
      console.log(error);
    }
  }
  
}
module.exports = new PostController();
