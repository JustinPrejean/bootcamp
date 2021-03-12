const express = require('express')
const app = express();
const request = require('request')
const yelp = require('yelp-fusion')

app.use(express.static('public'))

const PORT = process.env.PORT || 3000;

let apiKey = `g-ANEqGvrJQOHIhhX3ZSM8z66JrjGQ8VRPU1Z5GIs7OsR2UYZU1Kolv9KNGKXscaqwYWJHsJkzl-ktjp8Vmyambadj4-d2j5Wh3b_FHVzNpDxISqG_ynTQE7L0tDX3Yx`
let endpoint = `https://api.yelp.com/v3/businesses/`


const client = yelp.client(apiKey)

// client.search({
//     location: req.params.location,
//   }).then(response => {
//     console.log(response.jsonBody.businesses);
//   }).catch(e => {
//     console.log(e);
//   });

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.get('/searchResults', (req, res)=>{
    client.search({
        location: req.query.location,
      }).then(response => {
        // console.log(response.jsonBody.businesses);
        let businesses = response.jsonBody.businesses;
        res.render('searchResults.ejs', {businesses})
      }).catch(e => {
        console.log(e);
      });
})

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))