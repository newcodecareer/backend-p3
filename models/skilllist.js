const mongoose = require('mongoose');

const skillListSchema = new mongoose.Schema({
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
        'Rubbish Removal'],
        required: true
    },
    title:{
        type : String,
        minLength: 5,
        maxLength: 50,
        trim: true,
        required: true
    },
    description: {
        type: String,
        minLength: 5,
        trim: true,
        required: true
    },

    price: {
        type : Number,
        required: true
    }, 

    distance: {
        type : Number
    },

    avaliability: {
        type: String,
        minLength: 5,
        trim: true,
        required: true
    } 


})

module.exports = mongoose.model('skillList', skillListSchema);
