const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/about', (req, res) => {
  res.render('about.ejs');
});

app.get('/contact', (req, res) => {
  res.render('contact.ejs');
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
