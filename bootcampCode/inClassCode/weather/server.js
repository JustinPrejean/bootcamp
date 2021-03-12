const express = require("express");
const app = express();
const request = require("request");

const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/results", (req, res) => {
  // make the call - https://www.metaweather.com/api/location/2487956/
  let url = "https://www.metaweather.com/api/location/2487956/";
  request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      // receive and parse json
      let parsedData = JSON.parse(body);
      // do something with parsed json
      res.render("results.ejs", { data: parsedData });
    } else {
      res.render(`results.ejs`, { data: `Error getting data` });
    }
    // error handling
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
