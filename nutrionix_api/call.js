const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config()

function getKey() {
    let password = process.env.API_KEY;
    return password;
}

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
    console.log(headers);
        
    try {
        const response = await fetch(url, headers)
        const resJSON = await response.json()

        console.log(resJSON)

    } catch (error) {
        console.log(error);
        
    }
}

apiCall('tab soda')