const express = require('express');
const app = express();
const _fetch = require('node-fetch');
const { query } = require('express');

const PORT = process.env.PORT || 4000;
app.use(express.static('public'));

let endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';

app.get('/', (req, res) => {
  _fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw Error('Receiving response issue.');
      }
      return response.json();
    })
    .then((data) => {
      //   res.send(data);
      let currency = req.query.currency;
      res.render('index.ejs', { bpi: data.bpi, currency });
    })
    .catch((err) => {
      res.send('You caught error.');
    });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
