const mongoose = require('mongoose');


//create a schema 
const vegetableSchema = new mongoose.Schema({
    name:  { 
        type: String,
         required: true 
        },
    color:  { 
        type: String,
         required: true
         },
    readyToEat: Boolean
});

const Vegetable = mongoose.model('Vegetable', vegetableSchema);

module.exports = Vegetable;