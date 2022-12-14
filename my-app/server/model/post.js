const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: Array
  },
  user: {
   type: mongoose.Schema.Types.ObjectId,
   ref:"users"
  }
});
module.exports = mongoose.model("posts", postSchema);