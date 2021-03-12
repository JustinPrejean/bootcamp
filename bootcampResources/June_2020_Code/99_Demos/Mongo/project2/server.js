// For logging purposes only - development
const chalk = require('chalk')


// CONNECTING
const mongoose = require('mongoose')

const url = 'mongodb://localHost:27017/app_users'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> { console.log('Connected to database') })
    .catch(err => {
        console.log('Issue connecting to database')
        mongoose.disconnect()
    })

// BLUEPRINTS
let customerSchema = new mongoose.Schema({
    username: String,
    age: Number,
    favorite_pizza: String,
    member: {
        type: Boolean,
        required: [ true, 'Must have boolean for member key']
    },
    created: {
        type: Date,
        default: Date.now
    }
})

let Customer = mongoose.model("Customer", customerSchema)

// QUERIES
// // NOTE: commented out in order for second customer to be created
// Customer.create({
//     username: "Nancy",
//     age: 22,
//     favorite_pizza: "Pepperoni"
// }, function(err, result){
//     err ? 
//         console.log('Error creating document:', err)
//         : console.log('Success: ', result)
// })

// // NOTE: before the schema update requirements
// Customer.create({
//     username: "Tommy",
//     favorite_pizza: "Veggie"
// }, function(err, result){
//     err ? 
//         console.log('Error creating document:', chalk.red(err.message))
//         : console.log(chalk.green('Success: '), result)
// })

// NOTE: aftert he schema update requirements
Customer.create({
    username: "Tommy",
    favorite_pizza: "Veggie",
    member: true
}, function(err, result){
    err ? 
        console.log('Error creating document:', chalk.red(err.message))
        : console.log(chalk.blue('Success: '), result)
})