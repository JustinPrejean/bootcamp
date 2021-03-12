// require needed modules
var express = require("express");
var app = express();
const request = require("request"); // requiring request to use for API

app.use(express.static('public')) // use the public folder to utilize the styles.css file

// set port location to 4000 or possibilty of unknown port
const PORT = process.env.PORT || 4000;


// render home page
app.get("/", function (req, res) {
  res.render("home.ejs");
});

// render results
app.get("/results", function (req, res) {
  // fill out the code here which calls the Star Wars api end point
  let number = req.query.userNumber // gets input by user from home page
  let url = `https://swapi.dev/api/people/${number}` // creates url using input
  // gets the data and then renders the results.ejs page.
    request(url, (error, response, body)=>{ 
        if(!error && response.statusCode == 200) { 
            // if there is no error and status is 200 - Json will be parsed and used to show results on results page upon rendering
            let parsedData = JSON.parse(body);
            res.render("results.ejs", {data: parsedData}); // render results and assign parsedData to data to match ejs page calling data
        } else {
                res.render("error.ejs", {messsage: `Error: ${error}`});
                // if there is an error, the error page will render with the error message on the page
            }
        })
    });
  // also remember to handle the errors if any
  // you may have to use request or axios or any of the http modules
  // to make the call to the sw api.

app.listen(PORT, () => console.log(`Star Wars backend running on port ${PORT}`));

