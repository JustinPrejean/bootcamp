const express = require('express')
const app = express();

const person = require('./data');

app.use(express.static('public'))

const port = process.env.PORT || 3000

app.get('/', (req, res)=> {
    res.render('home.ejs', {data: person})
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})