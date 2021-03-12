// NOTE: You will have to comment and uncomment sections of code as you run
const mongoose = require('mongoose')

// creates the connection of app.js with local mongodb
// port 27017 is the default port used by mongo - required
mongoose.connect('mongodb://localhost:27017/JM', { useNewUrlParser: true, useUnifiedTopology: true  })
.then(() =>{
    console.log(`Connected to database.`)
})

// this is the 'blueprint' to ensure the correct name: value pairs 
// are used when submitting a document
let userSchema = new mongoose.Schema({
                    name: String,
                    age: Number,
                    email: String
                })

// now we need to create a model that allows us to interact with with our 
// documents and database
// the User inside the model is actually the name of the collection
// by default, mongo will make all lowercase and pluralize it
var User = mongoose.model("User", userSchema);

// var User = new User({
//     name: "Jerry",
//     age: 45,
//     email: "jerryseinfeld@gmail.com"
//  });

//  var User = new User({
//      name: 'Kramer',
//      age: 47,
//      email: 'CosmoKramer@gmail.com'
//  })

// var User = new User({
//     name: 'George',
//     age: 43,
//     email: 'CostanzaGeorge@gmail.com'
// })

//  User.save(function(err, user){
//    if(err) {
//        console.log("There was an error saving.");
//    } else {
//        console.log("The data was successfully saved.");
//        console.log(user);
//         // needed to close the connection to mongodb
//         // otherwise, it will keep the connection open indefinitely
//    }
//    mongoose.disconnect()
// });



// Instead of using new() and save() functions, use the create() method
User.create({
    name: 'Elaine',
    age: 39,
    email: 'ElaineBenes@gmail.com'
}, function(err, user){
    // using ternary operator to show differetn ways of writing code
    err ? 
        console.log('Error: ', err)
        : console.log('Here is your new user: ', user)
    mongoose.disconnect()
})



User.find({}, (err, users)=>{
    err ? 
        console.log('Error in your search', err)
        : console.log('Here is your search request: ', users)
    mongoose.disconnect()
})