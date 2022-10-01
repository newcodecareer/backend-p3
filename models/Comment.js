const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // each comment can only relates to one blog, so it's not in array
    // TODO will fix this later, how to connect post to comment.
    // post: {
    //      type: mongoose.Schema.Types.ObjectId,
    //      ref: 'Post',
    //      required: true
    //   },

    // customer: { type: mongoose.Schema.Types.ObjectId,
    //          ref: "Customer",
    //          required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema);
