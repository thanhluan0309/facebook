const Comment = require('../model/comment');
const Post = require('../model/post');

const CommentController = {
    postAComment: async (req, res) => {
        try {
            const newComment = new Comment({content: req.body.content, cmtBy: req.userExist, post: req.body.post});
            const savedComment = await newComment.save();
           if(req.body.post){
                const post = Post.findById(req.body.post);
                await post.updateOne({ $push: {comment : savedComment._id}});
           } else {
                return res.status(403).json({
                    success: true,
                    message: "Post comment fail"
                })
            }
        } catch (error) {
            console.log(error);
        }
    },
    updateAComment: async (req, res) => {
        try {
            const commentID = req.params.commentID;
            const existedComment = await comment.findById(commentID);
            if (existedComment) {
                const updatedTask = await comment.findByIdAndUpdate(commentID, req.body);
                return res.status(200).json({
                    success: true,
                    message: "Update comment success",
                })
            }
            else {
                return res.status(403).json({
                    success: false,
                    message: "Update comment fail",
                })
            }
        } catch (error) {
            console.log(error);
        }
    },
    deleteAComment: async (req, res) => {
        try {
            const commentID = req.params.commentID;
            const existedComment = await comment.findById(commentID);
            if (existedComment) {
                const deletedComment = await comment.findByIdAndDelete(commentID);
                return res.status(200).json({
                    success: true,
                    message: "Delete success",
                })
            }
            else {
                return res.status(403).json({
                    success: false,
                    message: "Delete comment fail",
                })
            }
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = CommentController;