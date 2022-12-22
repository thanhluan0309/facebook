const mongoose = require("mongoose");

const behaviorSchema = new mongoose.Schema({
  like: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      likeContent: {
        type: String,
      },
    },
  ],
  comment: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      CommentContent: {
        type: String,
      },
    },
  ],
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
});

module.exports = mongoose.model("behaviors", behaviorSchema);
