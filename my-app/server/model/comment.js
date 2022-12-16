const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    cmtBy: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "posts"
    }
}, {timestamps: true});

module.exports = mongoose.model('comments', commentSchema);