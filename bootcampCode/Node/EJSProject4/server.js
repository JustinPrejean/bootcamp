const express = require('express');
const data = require('./data');
const people = data.people;
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('home.ejs', { people });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
