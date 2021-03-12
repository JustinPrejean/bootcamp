const pokemon = require("pokemon");

let arr = [];
for (var i = 0; i < 5; i++) {
  arr.push(pokemon.random());
}

console.log(arr);
