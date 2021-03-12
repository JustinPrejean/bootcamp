const express = require("express");
const app = express();
const _fetch = require("node-fetch");
const { query } = require("express");

const PORT = process.env.PORT || 3500;

app.use(express.static("public"));

// https://api.lyrics.ovh/v1/artist/title
let endpoint = "https://api.lyrics.ovh/v1";

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/lyricResults", (req, res) => {
  let url = `${endpoint}/${req.query.artist}/${req.query.title}`;
  _fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error(
          "It's not your fault but it definitely might be the receiving Response"
        );
      }
      return response.json();
    })
    .then((data) => {
      let newLyrics = data.lyrics.replace(/\n/g, "<br>");
      res.render("lyricResults.ejs", { lyrics: newLyrics });
    })
    .catch((err) => {
      console.log(`I am the error: ${err}`);
      res.render("error.ejs", { error: "No matches found." });
    });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
