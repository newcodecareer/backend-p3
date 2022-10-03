const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
    },
    title: {
      type: String,
      required: [true, 'This field is required'],
      trim: true,
      minLength: 5,
      maxLength: 50,
    },
    onDate: {
      type: String,
      required: [true, 'This field is required'],
      minLength: 3,
      maxLength: 10,
    },
    location: {
      type: String,
      required: [true, 'This field is required'],
    },
    details: {
      type: String,
      required: [true, 'This field is required'],
      trim: true,
      minLength: 15,
      maxLength: 200,
    },
    budget: {
      type: Number,
      required: [true, 'This field is required'],
      trim: true,
      min: 1,
      max: 99999,
    },
    status: {
      type: String,
      default: 'OPEN',
    },
    tradieId: {
      type: String,
      default: 'UNASSIGNED',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
