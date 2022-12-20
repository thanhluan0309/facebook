const User = require("../model/user");
const Post = require("../model/post");

const PostController = {
   createPost : async(req , res)=>{
      try{
         const newPost = new Post(req.body);
         const savedPost = await newPost.save();
         res.status(200).json(savedPost);
      }catch(err){
         res.status(500).json(err);
      }
   },
   getPostByUser: async(req, res)=>{
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
}

module.exports = PostController;