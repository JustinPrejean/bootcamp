const express = require('express')
const app = express()

const $fetch = require('node-fetch')

const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

let endpoint = `https://api.punkapi.com/v2/beers/?beer_name=`


app.get("/", (req, res)=>{
    res.render('home.ejs')
})

app.get('/results', (req, res)=>{
    let url = `${endpoint}${req.query.search}`
    $fetch(url)
    .then(response =>{
        if(!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    .then(data=>{
        res.render('results.ejs', {data})
        console.log(data)
        
    })
    .catch(err=>console.log(`Error: ${err}`))
})

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))