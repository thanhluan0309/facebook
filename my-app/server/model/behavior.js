const mongoose = require("mongoose");

const behaviorSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: [],
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
});

module.exports = mongoose.model("behaviors", behaviorSchema);
