const express = require("express");
const app = express();
const _fetch = require("node-fetch");

const PORT = process.env.PORT || 4000;

app.use(express.static("public"));

let defaultImg = "https://images.dog.ceo/breeds/pyrenees/n02111500_7655.jpg";
let url = "https://dog.ceo/api/breeds/image/random";
app.get("/", (req, res) => {
  res.render("index.ejs", { image: defaultImg });
});

app.get("/getImage", (req, res) => {
  _fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error("It's not your fault...");
        res.end();
      }
      return response.json();
    })
    .then((data) => res.render("index.ejs", { image: data.message }))
    .catch((err) => {
      console.log("Catch error: ", err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
