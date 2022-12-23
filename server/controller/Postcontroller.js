const behavior = require("../model/behavior");
const Post = require("../model/post");
class PostController {
 async getPostByUser(req, res){
    try {
       Post.find({
          user: req.params.id
       }).populate('user').then((result)=>{
          res.send(result);
          console.log(req.params.id);
       });
    } catch (error) {
       res.status(500).json(error)
    }
 }
  async addPost(req, res) {
    try {
      const { title, content } = req.body;
      if (!title) {
        return res
          .status(500)
          .json({ success: false, message: "Tiêu đề không được bỏ trống !!" });
      } else if (!content) {
        return res
          .status(500)
          .json({ success: false, message: "Nội dung không được bỏ trống !!" });
      }
      const newpost = Post({
        title: title,
        content: content,
        user: req.UserExit,
      });
      await newpost.save();
      const newBehavior = behavior({
        post: newpost._id
      });
      await newBehavior.save();

      return res.status(200).json({
        success: true,
        message: "Add post success",
        newpost: newpost,
      });
    } catch (error) {
      console.log(error);
    }
  }
    async getAllPost(req, res) {
      try {
        const PostPublic = await Post.find();
        return res.status(200).json({
          success: true,
          AllPost: PostPublic,
        });
      } catch (error) {
        console.log(error);
      }
    }
  async getOnescheduleBY_id(req, res) {
    try {
      const schedulePublic = await Schedule.findOne({ _id: req.params.id });
      return res.status(200).json({
        success: true,
        schedulepublic: schedulePublic,
      });
    } catch (error) {
      console.log(error);
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
  //   async UpdateBy_id(req, res) {
  //     try {
  //       const { title, date, ispublic, content, ListUserAccess } = req.body;
  //       const newSchedule = {
  //         title: title,
  //         content: content,
  //         date: date,
  //         ispublic: ispublic,
  //         user: req.UserExit,
  //         ListUserAccess: ListUserAccess,
  //       };
  //       const updateSchedule = await Schedule.findOneAndUpdate(
  //         {
  //           _id: req.params.id,
  //         },
  //         newSchedule,
  //         { new: true }
  //       );
  //       await updateSchedule.save();
  //       return res.status(200).json({
  //         success: true,
  //         message: "Cập nhật thành công",
  //         newschedule: updateSchedule,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
}
module.exports = new PostController();
