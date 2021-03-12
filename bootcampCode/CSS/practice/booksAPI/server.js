<<<<<<< HEAD
const express = require('express');
const app = express();
const _fetch = require('node-fetch');
// const { query } = require('express')

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
const express = require('express');
const app = express();
const _fetch = require('node-fetch');
// const { query } = require('express')

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> 7d1ec4c540d041b4a31ff9257cb765ce163681f9
