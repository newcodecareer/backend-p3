const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please provide first name'],
    trim: true,
    minLength: 3,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide last name'],
    trim: true,
    minLength: 3,
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
    required: [true, 'Please provide phone number'],
    trim: true,
    minLength: 10,
    maxLength: 15,
  },
  address: {
    type: String,
    required: [true, 'Please provide address'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please input your password'],
    unique: true,
    minLength: 8,
    maxLength: 50,
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);