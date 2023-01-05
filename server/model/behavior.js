const mongoose = require("mongoose");

const behaviorSchema = new mongoose.Schema({
  like: [
    // {
    //   user: {
    //     type: String,
    //   },
    //   likeContent: {
    //     type: String,
    //   },
    // },
  ],
  comment: [
    // {
    //   user: {
    //     type: String,
    //   },
    //   CommentContent: {
    //     type: String,
    //   },
    // },
  ],
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
});

module.exports = mongoose.model("behaviors", behaviorSchema);
