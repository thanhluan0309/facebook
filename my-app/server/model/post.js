const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: Array,
    default: []
  },
  likes:{
    type:Array,
    default:[]
  },
  user: {
   type:mongoose.Schema.Types.ObjectId,
   ref:"users"
  },
  comment:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"comments"
  }
},
  {
    timestamps: true
  });
module.exports = mongoose.model("posts", postSchema);