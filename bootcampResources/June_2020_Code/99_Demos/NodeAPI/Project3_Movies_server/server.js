const express = require('express')
const app = express()

const $fetch = require('node-fetch')

app.use(express.static('public'))
// app.use(express.static("public"));

const port = process.env.PORT || 3000;
const {CONFIG} = require ("./config")

app.get('/', (req, res)=> {
    res.render('index.ejs')
})

app.get('/search', (req, res)=>{
    const endpoint = `https://api.themoviedb.org/3`;
    const apiKey = `api_key=${CONFIG.TMDB_KEY}`;
    let url = `${endpoint}/movie/now_playing?${apiKey}`
    $fetch(url)
    .then(response => {
        if (!response.ok) {
          // TODO: toggle the bang to simulate a fetch error
          throw Error(response.statusText);
        }
        return response.json();
      })
    .then(data => res.render('results.ejs', {data: data.results}))
    .catch(error => console.error("Error from network: ", error));
    
})

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})