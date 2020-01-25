let {searchNutrix, nutritionNutrix} = require('./call')

async function getCalorieOptions(search) {

    try {
        let foods = await searchNutrix(search)
        for (food in foods.branded) {
            console.log(foods.branded[food].brand_name_item_name, foods.branded[food].nf_calories)
        }
        
    } catch(error) {
        console.error(error);
        
    }
}

async function trackSodium(search) {
    try {
        let info = await nutritionNutrix(search)
        console.log(info.foods[0].food_name, info.foods[0].nf_sodium, info.foods[0].serving_unit)
    } catch (error) {
        console.error(error);
    }
}

async function display(search) {
    console.log(await searchNutrix(search))
}

async function displayNutrition(search) {
    console.log(await nutritionNutrix(search))
}

trackSodium('pho soup')
// displayNutrition('butter')