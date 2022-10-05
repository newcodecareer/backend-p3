const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
    title: {
      type: String,
      required: [true, 'This field is required'],
      trim: true,
      minLength: 5,
      maxLength: 50,
    },
    onDate: {
      type: Date,
      required: [true, 'This field is required'],
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
    isActive: {
      type: Boolean,
      default: true,
      required: true,
    },
    tradieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
