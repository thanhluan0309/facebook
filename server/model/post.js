const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: [],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  behaviors: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "behaviors",
  },
});

module.exports = mongoose.model("posts", PostSchema);
