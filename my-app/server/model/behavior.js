const mongoose = require("mongoose");

const behaviorSchema = new mongoose.Schema({
   post: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"posts"
   },
   like:[
      {
         user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
           },
           likeContent:{
            type: String
           },
      }
     ],
   comment:[
      {
         user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:"users"
           },
         CommentContent:{
            type: String
           },
      }
   ],
   
});
module.exports = mongoose.model("behaviors", behaviorSchema);