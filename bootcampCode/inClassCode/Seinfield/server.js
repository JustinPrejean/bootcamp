const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

// Connection
mongoose.connect(
    'mongodb://localhost:27017/Justin',
 { useNewUrlParser: true, 
    useUnifiedTopology: true 
 }
)
.then(()=>{console.log(`Mongodb running`)})
// Blueprints
// Schema and Model

let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

let UserModel = mongoose.model('User', userSchema)

var User = UserModel({
    name: "Jerry",
    age: 45,
    email: "jerryseinfield@gmail.com"
})

var User = UserModel({
    name: "Kramer",
    age: 47,
    email: "CosmoKramer@gmail.com"
})

//Write queries 
User.save(function(error, result){ //pass error first so it will get caught 
    if(error){
        console.log(`There was an error saving to db ${error}`)
    } else {
        console.log(`Data successfully saved: ${result}`)
    }
})

UserModel.create({
    name: 'Elaine',
    age: 39,
    email: 'Elaine@gmail.com'
}, (error, result)=>{
    error? console.log(`Error: ${error}`) : console.log(`Here is your new user: ${result}`)
})

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.listen(PORT, ()=>{console.log(`Server listening on port: ${PORT}`)})