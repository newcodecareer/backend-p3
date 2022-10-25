const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please provide first name'],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    lastName: {
      type: String,
      required: [true, 'Please provide last name'],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      trim: true,
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      // required: [true, 'Please provide phone number'],
      trim: true,
      minLength: 10,
      maxLength: 15,
    },
    address: {
      type: String,
      // required: [true, 'Please provide address'],
      trim: true,
      minLength: 10,
    },
    password: {
      type: String,
      required: [true, 'Please input your password'],
      trim: true,
      minLength: 8,
    },
    ABN: {
      type: String,
      // required: [true, 'Please input your password'],
      trim: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
);

CustomerSchema.methods.hashPassword = async function () {
  this.password = await bcrypt.hash(this.password, 12);
};

CustomerSchema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Customer', CustomerSchema);
