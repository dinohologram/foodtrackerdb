const Joi = require('joi')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Food, validate} = require('../models/foods')

router.get('/', async (req, res) => {
    const food = await Food.find()
    res.send(food)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let food = new Food({
        name : req.body.name,
        portion: req.body.portion,
        date: req.body.date
    })

    food = await food.save()
    res.send(food)

})

module.exports = router