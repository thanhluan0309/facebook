const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  like: [],
  commnet: [],
  share: [],
});

module.exports = mongoose.model("Post", PostSchema);
