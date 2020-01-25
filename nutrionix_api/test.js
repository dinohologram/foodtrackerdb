let {searchNutrix} = require('./call')

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

// getCalorieOptions('milk')

async function display(search) {
    console.log(await searchNutrix('candy'))
}

getCalorieOptions('chocolate')