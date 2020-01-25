const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config()



async function apiCall(food) {
    let url = `https://trackapi.nutritionix.com/v2/search/instant?query=${food}`
    let headers = {
            'method': 'GET',
            'headers': {
                'x-app-id': process.env.API_ID ,
                'x-app-key': process.env.API_KEY,
                'x-remote-user-id': '0'
            }
        }
        
    try {
        const response = await fetch(url, headers)
        const resJSON = await response.json()

        return resJSON;

    } catch (error) {
        console.log(error);
        
    }
}

//(recipe, grocery, restaurant, usda)
async function apiCallSearchType(food, type) {
    let url = `https://trackapi.nutritionix.com/v2/search/instant?query=${food}&search_type=${type}`
    let headers = {
            'method': 'GET',
            'headers': {
                'x-app-id': process.env.API_ID ,
                'x-app-key': process.env.API_KEY,
                'x-remote-user-id': '0'
            }
        }
        
    try {
        const response = await fetch(url, headers)
        const resJSON = await response.json()

        return resJSON;

    } catch (error) {
        console.log(error);
        
    }
}
async function apiNutrition(search) { 

    let url = `https://trackapi.nutritionix.com/v2/natural/nutrients`
    let body = {
        "query": search,
        "timezone" : 'US/Eastern'
        }
    let headers = {
        'method': 'POST',
        'headers': {
                'x-app-id': process.env.API_ID ,
                'x-app-key': process.env.API_KEY,
                'x-remote-user-id': '0',
                'Content-Type': 'application/json'
        },
        'body': JSON.stringify(body)
    }
    
    let response = await fetch(url, headers)
    let resJSON = await response.json()
    return resJSON
}

async function display() {
    //console.log(await apiCallSearchType('spinach', 'grocery'))
    console.log(await apiCall('rye bread'))
}

exports.searchNutrix = apiCall
exports.nutritionNutrix = apiNutrition