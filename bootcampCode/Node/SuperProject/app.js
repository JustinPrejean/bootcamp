const marvel = require("marvel-characters");

let name = marvel();
let list = marvel.characters;
list = require("marvel-characters/characters.json");

console.log(name);
console.log("# of characters in the db: " + list.length);

let man = [];
list.forEach((char) =>
  char.split("").splice(0, 3).join("") == "Man" ? man.push(char) : ""
);
man.forEach((char) => console.log(char));

for (var i = 0; i < list.length; i++) {
  if (list[i] === "Iron Man") {
    console.log("Iron Man");
    break;
  } else if (i === list.length - 1) {
    console.log("I guess there's no Iron man");
  }
}

for (var i = 0; i < list.length; i++) {
  if (list[i] === "Batman") {
    console.log("Batman");
    break;
  } else if (i === list.length - 1) {
    console.log("Batman has no powers anyway");
  }
}

// var item = "mandible";
// console.log(
//   item.split("").splice(0, 1).join("") === "m" ? "Great job" : "bad job"
// );
