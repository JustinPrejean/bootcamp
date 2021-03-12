const express = require('express')
const app = express();
const mongoose = require('mongoose')

const PORT = process.env.PORT || 4000;

mongoose.connect('mongodb://localhost:27017/app_users', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(()=>{console.log(`Mongodb running`)});

let userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favorite_pizza: String
})

let userModel = mongoose.model('User', userSchema);

// var user = userModel({
//     name: "Nancy",
//     age: 22,
//     favorite_pizza: "pepperoni"
// })

var user = userModel({
    name: "Tommy",
    favorite_pizza: "veggie"
})

user.save((error, result)=>{
    if(error){
        console.log(`There was an error saving to db ${error}`)
    } else {
        console.log(`Data successfully saved: ${result}`)
    }
})


app.get('/', (req, res)=>{
    res.send("hello world")
})

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))