const readlineSync = require("readline-sync");

let choices = [
  "spicy",
  "very spicy",
  "so spicy, you won't be able to feel your face"
];

let index = readlineSync.keyInSelect(
  choices,
  "How spicy would you like your tacos?"
);

let options = ["yes", "no"];

let index2 = readlineSync.keyInSelect(
  options,
  `Ok, so you want your tacos to be ${choices[index]}. \nAre you sure about this?`
);

let result =
  index2 == 0
    ? "Ok, we will have your order right out."
    : "What's the matter? Can't handle the heat?";

console.log(result);
