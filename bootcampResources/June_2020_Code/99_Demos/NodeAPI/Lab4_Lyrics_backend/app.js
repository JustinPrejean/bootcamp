const express = require("express");
const app = express();
const $fetch = require("node-fetch");

app.use(express.static("public"));

const port = process.env.PORT || 7000;

let endpoint = "https://api.lyrics.ovh/v1";

app.get("/", function(req, res) {
  res.render("home.ejs");
});

app.get("/lyricResults", function(req, res) {
  let url = `${endpoint}/${req.query.artist}/${req.query.title}`;
  $fetch(url)
    .then(response => {
      if (!response.ok) {
        // TODO: toggle the bang to simulate a fetch error
        throw Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      let theLyrics = data.lyrics.replace(/\n/gi, "<br>");
      res.render("lyricResults.ejs", { words: theLyrics });
    })
    .catch(error => {
      console.error("Error from network: ", error);
      res.render("error.ejs", { error: "No matches found." });
    });
});

app.listen(3000, function() {
  console.log(`Listen on port ${port}`);
});
