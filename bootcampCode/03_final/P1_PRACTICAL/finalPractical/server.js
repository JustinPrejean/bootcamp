const express = require('express')
const app = express()

const $fetch = require('node-fetch')

const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

let endpoint = `https://api.punkapi.com/v2/beers/?beer_name=`


app.get("/", (req, res)=>{
    // Generated data from home page to show results for beer every time
    let url = `${endpoint}beer`
    $fetch(url)
    .then(response =>{
        if(!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then(data=>{
        res.render('home.ejs', {data}) //return all data to use in ejs templates
        
    })
    .catch(err=>console.log(`Error: ${err}`))
})

app.get('/results', (req, res)=>{
    // generate data based on search criteria 
    let url = `${endpoint}${req.query.search}`
    $fetch(url)
    .then(response =>{
        if(!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then(data=>{
        res.render('results.ejs', {data}) //return all data to use in ejs templates
        
    })
    .catch(err=>console.log(`Error: ${err}`))
})

app.get('/favorites', (req, res)=>{
    // generate data based on search criteria 
    res.render('favorites.ejs')
})

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))