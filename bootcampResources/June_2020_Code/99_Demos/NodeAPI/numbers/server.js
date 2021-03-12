const express = require('express')
const app = express()

const fetch = require('node-fetch')

const request = require('request')

const PORT = process.env.PORT || 3000

let url = 'http://numbersapi.com/random/year?json'

app.get('/', (req, res)=>{
    res.send('I am the numbers API. Woohoo!!!')
})

app.get('/doggyHorse', (req, res)=>{
    fetch(url)
    .then( response => {
        return response.json()
    })    
    .then((data)=>{
        res.send(data.type)
    })
    .catch(err => console.log('My error: ', err))
})

// app.get('/doggyHorse', (req, res)=>{
//     request(url, (err, response, body)=>{
//         let parsedData = JSON.parse(body)
//         res.render('example.ejs', { cat: parsedData.type})
//     })
// })

app.listen(PORT, ()=> console.log(`App listening on port ${PORT}`))