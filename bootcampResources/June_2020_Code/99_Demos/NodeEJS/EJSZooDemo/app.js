const express = require('express')
const app = express()
// const ejs = require('ejs')

const port = process.env.PORT || 3001

const zoo = [
    {
        name: "Tik-tok",
        breed: 'alligator',
        size: 'large',
        isPet: false,
        country: 'Neverland',
        owner: {
            fname: 'Peter',
            lname: 'Pan',
            phone: '999-HOOK'
        }
    },
    {
        name: "Melman",
        breed: 'giraffe',
        size: 'x-large',
        isPet: false,
        country: 'Madagascar',
        owner: {
            fname: 'Vitaly',
            lname: 'Zaragoza',
            phone: '512-RICO'
        }
    },
    {
        name: "Mickey",
        breed: 'mouse',
        size: 'x-small',
        isPet: true,
        country: 'U.S.',
        owner: {
            fname: 'Walt',
            lname: 'Disney',
            phone: '555-EARS'
        }
    },
    {
        name: "Bruce",
        breed: 'hyena',
        size: 'medium',
        isPet: true,
        country: 'U.S',
        owner: {
            fname: 'Harleen',
            lname: 'Quinzel',
            phone: '12J-OKER'
        }
    },
    {
        name: "Squeak",
        breed: 'bat',
        size: 'small',
        isPet: true,
        country: 'Transylvania',
        owner: {
            fname: 'Vlad',
            lname: 'Tempus',
            phone: 'TR6-5000'
        }
    },
    {
        name: "Francis",
        breed: 'lady bug',
        size: 'x-x-small',
        isPet: false,
        country: 'Your Backyard',
        owner: {
            fname: 'P.T.',
            lname: 'Flea',
            phone: 'BUG-LIFE'
        }
    }
]

app.get('/', (req, res)=>{
    res.send('I am the root route')
})

app.get('/home', (req, res)=>{
    res.render('home.ejs', {zoo})
})

app.get('/about', (req, res)=>{
    res.render('about.ejs', {zoo})
})

app.get('/contact', (req, res)=>{
    res.render('contact.ejs', {zoo})
})

app.get('/pet', (req, res)=>{
    res.render('pet.ejs', {zoo})
})

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})