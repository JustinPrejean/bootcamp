const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

let pizza = `I like my pizza with extra pineapple.`;
let cappuccino = `I like my cappuccino to be sweet.`;
let fries = `I like my frieds crispy with extra salt.`;

app.get("/", (req, res) => {
  res.render("home.ejs", { pizza });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", { cappuccino });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", { fries });
});

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
