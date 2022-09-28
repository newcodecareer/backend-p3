const mongoose = require('mongoose');

const SkilllistSchema = new mongoose.Schema({
  Listcategory: {
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
    required: [true, 'Please select category'],
  },
  Listtitle: {
    type: String,
    required: [true, 'Please enter a title'],
    minLength: 5,
    maxLength: 50,
    trim: true,
  },
  Listdescription: {
    type: String,
    required: [true, 'Please provide your list description'],
    minLength: 5,
    trim: true,
  },

  Listprice: {
    type: Number,
    required: [true, 'Please set the price'],
  },

  Listdistance: {
    type: Number,
    required: [true, 'Please enter the distance'],
  },

  Listavaliability: {
    type: String,
    required: [true, 'Please provide your avaliability'],
    minLength: 1,
    trim: true,
  },
});

const Skilllist = mongoose.model('Skilllist', SkilllistSchema);

module.exports = Skilllist;
