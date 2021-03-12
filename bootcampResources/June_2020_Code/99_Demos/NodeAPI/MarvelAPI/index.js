require('dotenv').config()
const express = require('express')
const app = express()
const $fetch = require('node-fetch')
const crypto = require('crypto')
const CharModel = require('./db')


const port = process.env.PORT || 3000

const publicKey = process.env.PUB_KEY
const privateKey = process.env.PRIV_KEY


app.listen(port, ()=> console.log(`App listening on port ${port}`))

app.get('/', (req, res)=> {
    res.render('home.ejs')
})

app.get('/search', (req, res)=>{
    let characName = req.query.chName
    
    let ts = Date.now()
    let preHash = ts + privateKey + publicKey
    let hash = crypto.createHash('md5').update(preHash).digest('hex')
    console.log(hash)
    let url = 'https://gateway.marvel.com/v1/public/characters?limit=10&nameStartsWith=' 
                + characName
                + `&ts=${ts}`
                + '&apikey='
                + publicKey
                + '&hash='
                + hash
                
    $fetch(url)
    .then(response => response.json())
    .then(results => {
        console.log('Results: ', results.data.results)
        res.render('results.ejs', {data: results.data.results})
    })
    .catch(error => console.log('Error', error))
})

app.get('/add', (req, res)=> {
    console.log('Param: ', req.query.charId)
    let id = req.query.charId
    let ts = Date.now()
    let preHash = ts + privateKey + publicKey
    let hash = crypto.createHash('md5').update(preHash).digest('hex')
    let url = 'https://gateway.marvel.com/v1/public/characters/'
                + id 
                + '?apikey='
                + publicKey
                + '&hash='
                + hash
                + `&ts=${ts}`
    $fetch(url)
    .then(response => response.json())
    .then(results => {
        console.log('Results 2: ', results.data.results)
        let {id, name, description } = results.data.results[0];
        description = description ? description : undefined;
        CharModel.create({
            id: id,
            name: name,
            description: description
        }, function(err, result){
                if(err){
                    console.log('Error saving document')
                    res.redirect('/')
                } else {
                    console.log('Document saved: ', result)
                    res.redirect('/showResults')
                }  
            })
    })
    .catch(error => console.log('Error', error))
})

app.get('/showResults', (req, res)=>{
    CharModel.find({}, (err, results)=>{
        if(err){
            console.log('Error finding documents.', err)
        } else {
            console.log('Documents found: ', results)
            res.render('dbResults.ejs', {data: results})
        } 
    })
})


app.get('/search', (req, res)=>{
    let characName = req.query.chName
    
    let ts = Date.now()
        //pubKey and privKey - technically numbers (hexdecimal), but is being passed as string (see .env file) - to keep everything as numbers and not concatenate, need to have TS first - Marvel docs show how to structure for md5 ts + privkey + pubkey
    let preHash = ts + privKey + pubKey
    //Marvel API needs 'md5 digest' - will take public and private key and convert it to a hexidecimal
    let hash = crypto.createHash('md5').update(preHash).digest('hex')
    //url needs private key, public key, hash and timestamp
    let url = 'https://gateway.marvel.com/v1/public/characters?limit=10&nameStartsWith=' 
                + characName
                + `&ts=${ts}`
                + '&apikey='
                + pubKey
                + '&hash='
                + hash
         
    $fetch(url)
             //extract data from json  
    .then(response => response.json())
    .then(results => {
        console.log('RESULTS: ', results.data.results)
                    //send data to the front so it can be displayed. Data sent as object
        res.render('results.ejs', {data: results.data.results})
    })
    .catch((error) => {
        console.log('Error', error)
    })
})