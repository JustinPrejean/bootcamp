const express = require('express');
const app = express();
const request = require('request');

let weatherRequest = 'https://www.metaweather.com/api/location/2487956/';


app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/results", function(req, res){
    request(weatherRequest, function(error, response, body) {
        console.log('response', response)
        if(!error && response.statusCode == 200) {
            let parsedData = JSON.parse(body);
            res.render("results.ejs", {data: parsedData});
        }
    })
});

app.listen(3001, () => {
    console.log('Listening on port 3001!');
});

