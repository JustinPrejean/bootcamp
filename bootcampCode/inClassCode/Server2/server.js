// Foundation
const express = require("express");
const app = express();

//Route Handling
app.get("/", (req, res) => {
  res.send("Hello");
});

// app.get("/cat", (req, res) => {
//   res.send("Cats");
// });

// app.get("/dog", (req, res) => {
//   res.send("Dogs");
// });

// app.get("/dog/woof", (req, res) => {
//   res.send("woof woof bitch");
// });

app.get("/:animal", (req, res) => {
  // console.log(req)
  let item = req.params.animal;
  res.send(`I like ${item}`);
});

app.get("/account/:name/amount/:num", (req, res) => {
  // If the num is > 1000 send back 'Hello :name, can I borrow some money?'
  // else send back "You like living on the edge"
  // if (req.params.num > 1000) {
  //   res.send(`Hello ${req.params.name}. Can I borrow some money.`);
  // } else {
  //   res.send(`You like living on the edge?`);
  // }

  res.send(
    req.params.num > 1000
      ? `Hello ${req.params.name}. Can I borrow some money.`
      : `You like living on the edge?`
  );
});

const PORT = process.env.PORT || 3000;

// Listener
app.listen(PORT, () => {
  console.log(`Server has started running on PORT ${PORT}`);
});

// res.end()
// res.send()
// res.render()
// res.json()
