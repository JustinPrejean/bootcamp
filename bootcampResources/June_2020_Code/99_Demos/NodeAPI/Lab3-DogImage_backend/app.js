const express = require('express')
const app = express();

const $fetch = require('node-fetch')

const port = process.env.PORT || 3000

var image = `https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg`
const url = 'https://dog.ceo/api/breeds/image/random'

app.use(express.static('public'))

app.get('/', (req, res)=> {
    res.render('index.ejs', {image})
})

// respond to anyone asking for GET request
//   sent to {thisServer}/getImage
//   e.g. localhost:3000/getImage
//     or www.mywebsite.com/getImage
app.get('/getImage', (req, res) => {
    $fetch(url, {method: 'GET'})
    .then(response => {
        console.log(response)
        if(!response.ok){ // TODO: toggle the bang to simulate a fetch error
            throw Error(response.statusText)
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        res.render('index.ejs', {image: data.message})
    })
    .catch(err => {
        console.log('Error from network: ', err)
        res.json({
            error: err.message,
            message: 'Something weird occurred on the server'
        })
    })
})

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`)
})