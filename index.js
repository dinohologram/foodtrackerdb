const foods = require('./routes/foods')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(`mongodb+srv://dino:${process.env.DB_PASS}@cluster0-c4ci4.mongodb.net/test?retryWrites=true&w=majority`, options)
    .then(() => console.log('CONNECTED! SUCCESS!'))
    .catch((err) => console.err('Error - Not Connected - Error', err))

app.use(express.json())
app.use('/api/foods', foods)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`LISTENING ON PORT: ${port}`))


    
