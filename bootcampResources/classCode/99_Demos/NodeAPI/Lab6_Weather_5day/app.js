const express = require('express');
const app = express();
const request = require('request');
let weatherRequest = 'https://www.metaweather.com/api/location';

app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index.ejs')
})

app.get("/results", function(req, res){
    let location = req.query.location
    request(`${weatherRequest}/search/?query=${location}`, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            let newUrl = data.length > 0 ? `/results/${data[0].woeid}` : `/error`
            res.redirect(newUrl); 
        }
    })
});



app.get('/results/:id', function(req, res ){
    let woeid = req.params.id;
    request(`${weatherRequest}/${woeid}/`, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let parsedData = JSON.parse(body);
            // assigns timeDisplay from function to a new variable
            let newTime = timeConvert(parsedData.time);
            res.render("results.ejs", {data: parsedData, time: newTime});
        }
        res.end()
    })
    
})

app.get('/error', function(req, res){
    res.render('error.ejs')
})


function timeConvert(timeData) {
    // create a new date object
    let d = new Date(timeData);
    // assigns values to vars using destructuring
    let [hh,mm] = [d.getHours(), d.getMinutes()]
    // assigns pm or am depending on specific hour
    let dayNight = hh >= 12 ? 'pm' : 'am';
    // converts military time into 12 hour segements
    hh = (hh%12 === 0 && dayNight === 'pm')? hh : hh%12;
    // get specific minutes from date object
    mm = mm < 10? "0" + mm : mm;
    //  builds the time for display
    let displayTime = `${hh}:${mm} ${dayNight}`
    // returns variable back to original function
    return displayTime;
}

app.listen(5000, () => {
    console.log('Listening on port 5000!');
});

