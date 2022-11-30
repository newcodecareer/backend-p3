const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please provide first name'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Please provide last name'],
      trim: true,
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
    },
    address: {
      type: String,
      default: 'Add your address.',
      // required: [true, 'Please provide address'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please input your password'],
      trim: true,
      minLength: 8,
    },
    ABN: {
      type: String,
      default: 'Add Your ABN, start to make money.',
      // required: [true, 'Please input your password'],
      trim: true,
    },
    // birthday: {
    //   default: 'Add Your Birthday here.',
    //   type: String,
    //   trim: true,
    // },
    birthdayDay: {
      default: 'Add Your Birthday here.',
      type: String,
      trim: true,
    },
    birthdayMonth: {
      default: '',
      type: String,
      trim: true,
    },
    birthdayYear: {
      default: '',
      type: String,
      trim: true,
    },
    skillOne: {
      default: 'Add Your skills or services.',
      type: String,
      trim: true,
    },
    skillTwo: {
      default: '',
      type: String,
      trim: true,
    },
    skillThree: {
      default: '',
      type: String,
      trim: true,
    },
    skillFour: {
      default: '',
      type: String,
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
    skills: [
      {
        default: 'Add Your skills or services.',
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SkillList',
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
