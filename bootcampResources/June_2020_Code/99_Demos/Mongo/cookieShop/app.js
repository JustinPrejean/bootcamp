const mongoose = require('mongoose')

const url = 'mongodb://localHost:27017/jms_cookie_shop'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log(`Connected to the ${url} datatbase`)
    })
    .catch(err => console.log('Issues connecting to data base.'))

 let cookieSchema = new mongoose.Schema({
    flavor: String,
    price: Number,
    tasty: Boolean
})

let ProductModel = mongoose.model('Product', cookieSchema)

// // NOTE: 1st cookie
// let Cookie = new ProductModel({
//     flavor: "Chocolate Chip",
//     price: 1.99,
//     tasty: true
// })

// // NOTE: 2nd cookie
// let Cookie = new ProductModel({
//     flavor: "Raisin",
//     price: 2.49,
//     tasty: false
// })

// // NOTE: using new and save fo cookies 1 and 2
// Cookie.save((err, result)=>{
//     err? 
//         console.log('Error saving document')
//         : console.log('Document saved: ', result)
// })

// // NOTE: 3rd cookie using create method using callback function
// ProductModel.create({
//         flavor: "Sugar",
//         price: 1.99,
//         tasty: true
// }, function(err, result){
//     if(err){
//         console.log('Error saving document')
//     } else {
//         console.log('Document saved: ', result)
//     }     
// })

// NOTE: find() using filter tasty: true, and then send back all results
// using fat arrow callback function
ProductModel.find({tasty: true}, (err, results)=>{
    if(err){
        console.log('Error finding documents.', err)
    } else {
        console.log('Documents found: ', results)
    } 
})

// NOTE: an example that causes an error and uses chaining
ProductModel.find({tasty: "dog"})
.then(results => console.log('Documents found: ', results))
.catch(err => console.log('Error finding documents.', err.message))
