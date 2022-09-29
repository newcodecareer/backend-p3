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
        'Rubbish Removal'],
        required: true
    },
    Listtitle:{
        type : String,
        minLength: 5,
        maxLength: 50,
        trim: true,
        required: true
    },
    Listdescription: {
        type: String,
        minLength: 5,
        trim: true,
        required: true
    },

    Listprice: {
        type : Number,
        required: true
    }, 

    Listdistance: {
        type : Number
    },

    Listavaliability: {
        type: String,
        minLength: 5,
        trim: true,
        required: true
    } 


})

module.exports = mongoose.model('Skilllist', SkilllistSchema);