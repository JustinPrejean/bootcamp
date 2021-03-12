const express = require('express')
const app = express();

const port = process.env.PORT || 3000

let pizza = 'I like my pizza with extra pineapple.'
let cappuccino = 'I like my cappuccino to be sweet.'
let fries = 'I like my fries crispy with extra salt.'

app.get('/', (req, res) => {
    res.render('home.ejs', {data: pizza})
})

app.get('/about', (req, res) => {
    res.render('about.ejs', {data: cappuccino})
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs', {data: fries})
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})