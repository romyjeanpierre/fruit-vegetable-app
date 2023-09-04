const mongoose = require('mongoose');


//create a schema 
const fruitSchema = new mongoose.Schema({
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

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;