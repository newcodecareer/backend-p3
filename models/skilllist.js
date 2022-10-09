const mongoose = require('mongoose');

const skillListSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        'Electric',
        'Building and Construction',
        'Carpentry',
        'Cleaning',
        'Fencing',
        'Landscaping and Gardening',
        'Furniture Assembling',
        'Plumbing',
        'Removal',
        'Rubbish Removal',
      ],
      required: true,
    },
    title: {
      type: String,
      minLength: 5,
      maxLength: 50,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      minLength: 5,
      trim: true,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    distance: {
      type: Number,
    },
    location: {
      type: String,
      required: true,
    },
    availability: {
      type: String,
      minLength: 5,
      trim: true,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SkillList', skillListSchema);
