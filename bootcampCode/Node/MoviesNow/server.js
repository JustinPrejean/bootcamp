const express = require('express');
const app = express();
const request = require('request')

const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

const cors = require('cors')
app.use(cors())

app.get('/', (req, res)=>{
    res.render('index.ejs');
})

app.get('/results', (req, res)=>{
  let url = "https://api.themoviedb.org/3/movie/now_playing?api_key=e86d0edb8d88031d1ddd0bb4f4220a3a&language=en-US";
  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      // receive and parse json
      let parsedData = JSON.parse(body);
      // do something with parsed json
      res.render("results.ejs", { data: parsedData.results });
      console.log(parsedData.results)
    } else {
      res.render(`results.ejs`, { data: `Error getting data` });
    }
    // error handling
  });})

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))