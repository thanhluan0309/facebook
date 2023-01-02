const behavior = require("../model/behavior");
const Post = require("../model/post");
const mongoose = require("mongoose");

const formidable = require("formidable");
class PostController {
  async addPost(req, res) {
    const newbehaviors = behavior({});
    await newbehaviors.save();
    try {
      const form = formidable({
        multiples: true,
        uploadDir: "./uploads",
        maxFileSize: 20 * 1024 * 1024,
        keepExtensions: true,
      });
      let formcreateNote = {
        title: "",
        content: [],
        user: mongoose.Schema.Types.ObjectId,
      };
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.log(err);
          return;
        }
        let filename = [];
        var array = files["file"];

        formcreateNote.title = fields.title;
        if (array.length !== undefined) {
          array.forEach((element) => {
            filename.push(element.newFilename);
          });
          formcreateNote.content = filename;
        } else {
          formcreateNote.content = files["file"].newFilename;
        }
        formcreateNote.user = fields.userid;
        const newNote = await Post(formcreateNote);
        await newNote.save();

        const newbehaviors = behavior({
          post: newNote._id,
          like: [],
          comment: [],
        });
        await newbehaviors.save();
        return res
          .status(200)
          .json({ success: true, newNote: files, fields: fields });
      });
    } catch (error) {
      console.log(error);
    }
  }
  async getAllPost(req, res) {
    try {
      const PostPublic = await Post.find().populate("user");
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
