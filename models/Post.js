const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: [true, 'This field is required'],
    trim: true,
    minLength: 1,
    maxLength: 50,
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
    trim: false,
    minLength: 3,
    maxLength: 10,
  },
  beforeDate: {
    type: String,
    required: [true, 'This field is required'],
    trim: false,
    minLength: 3,
    maxLength: 10,
  },
  flexibleDate: {
    type: String,
    required: [true, 'This field is required'],
    trim: false,
    minLength: 1,
    maxLength: 5,
  },
  inPerson: {
    type: String,
    required: [true, 'This field is required'],
    trim: false,
    minLength: 1,
    maxLength: 5,
  },
  online: {
    type: String,
    required: [true, 'This field is required'],
    trim: false,
    minLength: 1,
    maxLength: 5,
  },
  country: {
    type: String,
    required: [true, 'This field is required'],
    trim: false,
    minLength: 2,
    maxLength: 15,
  },
  suburb: {
    type: String,
    required: [true, 'This field is required'],
    trim: true,
    minLength: 5,
    maxLength: 50,
  },
  details: {
    type: String,
    required: [true, 'This field is required'],
    trim: true,
    minLength: 15,
    maxLength: 200,
  },
  budget: {
    type: String,
    required: [true, 'This field is required'],
    trim: true,
    minLength: 1,
    maxLength: 10,
  },
  status: {
    type: String,
    required: [true, 'This field is required'],
    trim: true,
    minLength: 1,
    maxLength: 10,
  },
  tradieId: {
    type: String,
    required: [true, 'This field is required'],
    trim: true,
    minLength: 1,
    maxLength: 10,
  },
  comments: {
    type: String,
    required: [true, 'This field is required'],
    trim: true,
    minLength: 1,
    maxLength: 10,
  },
});

module.exports = mongoose.model('Post', PostSchema);
