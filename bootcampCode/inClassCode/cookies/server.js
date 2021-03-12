const express = require('express')
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000

mongoose.connect(
    'mongodb://localhost:27017/Justins_cookie_shop',
 { useNewUrlParser: true, 
    useUnifiedTopology: true 
 }
)
.then(()=>{console.log(`Mongodb running`)})

let cookieSchema = new mongoose.Schema({
    name: String,
    price: Number,
    tasty: Boolean
})

let cookieModel = mongoose.model('cookies', cookieSchema)

var cookie = cookieModel({
    name: "Chocolate chip",
    price: 1.99,
    tasty: true
})

var cookie2 = cookieModel({
    name: "Raisin",
    price: 2.49,
    tasty: false
})

cookie.save((error, result)=>{
    (error) ? 
        console.log(`There was an error saving to db ${error}`)
    :console.log(`Data successfully saved: ${result}`)
})

cookie2.save((error, result)=>{
    (error) ? 
        console.log(`There was an error saving to db ${error}`)
    :console.log(`Data successfully saved: ${result}`)
})


cookieModel.create({
    name: "Sugar",
    price: 1.99,
    tasty: true
}, (error, result)=>{
    (error) ? 
    console.log(`There was an error saving to db ${error}`)
:console.log(`Data successfully saved: ${result}`) 
})

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(PORT, ()=>console.log(`Server listening on port: ${PORT}`))