const user = require("../model/user");
const post = require("../model/post");

class PostController{
   findAllPost = function(postTitle , done){
   post.find({}, (error, results)=>{
      if(error){
         console.log(error);
      }else{
         done(null, results);
      }
   })
}
}

module.exports = new PostController();