const readlineSync = require("readline-sync");

// let name = readlineSync.question("What is your name? ");
// let food = readlineSync.question("What is your favorite food? ");
// let drink = readlineSync.question("What is your favorite drink? ");

// console.log(
//   `Hi ${name}, your favorite food is ${food} and your favorite drink is ${drink}.`
// );

let spiceLevel = [
  `spicy`,
  `very spicy`,
  `so spicy, you won't be able to feel your face`,
];
let yesOrNo = ["yes", "no"];

let spiceAnswer = readlineSync.keyInSelect(
  spiceLevel,
  `How spicy would you like your tacos? `
);
let confirm = readlineSync.keyInSelect(
  yesOrNo,
  `Ok, so you want your tacos to be ${spiceLevel[spiceAnswer]}. Are you sure about this? `
);

console.log(
  yesOrNo[confirm] == "yes"
    ? `Ok, we will have your order right out`
    : `What's the matter? Can't handle the heat?`
);
