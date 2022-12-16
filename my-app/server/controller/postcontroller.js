const User = require("../model/user");
const Post = require("../model/post");

const PostController = {
   creatPost : async(req , res)=>{
      try{
         const newPost = new Post(req.body);
         const savedPost = await newPost.save();
         res.status(200).json(savedPost);
      }catch(err){
         res.status(500).json(err);
      }
   }
}

module.exports = PostController;