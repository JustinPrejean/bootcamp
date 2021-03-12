var animals = require("animals");
const Log = require("log.pets");

console.log(animals());
Log.lion();

Log.zoo(animals(), animals(), animals());

console.log(`# of animals in generator: ${animals.words.length}`);

let count = 0;

animals.words.forEach((animal) =>
  animal.split("").splice(0, 1).join("") === "g" ? count++ : ""
);

console.log(
  count > 0
    ? `# of animals starting with g: ${count}`
    : `No animals started with g`
);
