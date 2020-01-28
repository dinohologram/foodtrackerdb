const Joi = require('joi');
const mongoose = require('mongoose');

const Food = mongoose.model( 'Food', new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    portion : {
        type: String,
        default: '1 serving'
    },
    date : {
        type: Date,
        default: Date.now
    }
    // serving: {
    //     type: String,
    //     default: '1'
    // },
    // potassium: {
    //     type: Number,
    //     default: null
    // },
    // sodium: {
    //     type: Number,
    //     default: 0
    // }
    
}));

function validateFood(food) {
    schema = {
        name : Joi.string().max(50).required(),
        portion : Joi.string().max(20),
        date : Joi.date()
        // sodium: Joi.number(),
        // potassium: Joi.number(),
        // serving: Joi.number()
    }

    return Joi.validate(food, schema)
}

exports.Food = Food
exports.validate = validateFood