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
    // calories : pull from Nutritionix or use their logging system db
}));

function validateFood(food) {
    schema = {
        name : Joi.string().max(50).required(),
        portion : Joi.string().max(20),
        date : Joi.date()
    }

    return Joi.validate(food, schema)
}

exports.Food = Food
exports.validate = validateFood