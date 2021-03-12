// Foundation
const express = require("express");
const app = express();

// makes the App aware of the Public folder
app.use(express.static("public"));

// using $ to designate using on the backend, to distinguish in case using fetch on front end also
const $fetch = require("node-fetch");
// endpoint for bitcoin
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

// Route Handlers
app.get("/", (req, res) => {
  res.render("index.ejs", { rate: "", symbol: "" }); // sets rate to empty when root rout loads
});

app.get("/getPrice", function(req, res) {
  $fetch(url)
    .then(response => {
      if (!response.ok) {
        // TODO: toggle the bang to simulate a fetch error
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      let rate = data.bpi[req.query.country].rate_float.toFixed(2); // sets value 2 decimal places
      let symbol = data.bpi[req.query.country].symbol; // sets symbol based on country
      // NOTE: same as res.render('index.ejs',{rate: rate, symbol:symbol});
      res.render("index.ejs", { rate, symbol });
    })
    .catch(error => {
      console.error("Error from network: ", error);
      res.render("index.ejs", {
        rate: "There has been an error. Try again.",
        symbol: ""
      });
    });
});

//Listener
app.listen(3000, function() {
  console.log("Bitcoin App is listening");
});
