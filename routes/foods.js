const Joi = require('joi')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Food, validate} = require('../models/foods')
const {apiNutrition} = require('../nutrionix_api/call')

dotenv.config()

router.get('/', async (req, res) => {
    const food = await Food.find()
    res.send(food)
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {

        const nutrition = new Promise((resolve, reject) => {
            let info = apiNutrition(req.body.name)
            resolve(info)
        })

        console.log(await nutrition)

        let food = new Food({
            name : req.body.name,
            portion: req.body.portion,
            date: req.body.date
            // serving: await nutrition.foods[0].serving_unit,
            // sodium: await nutrition.foods[0].nf_sodium,
            // potassium: await nutrition.foods[0].nf_potassium,
        })

    food = await food.save()
    res.send(food)

    } catch (error) {
        console.error(error);
    }

    

})

module.exports = router