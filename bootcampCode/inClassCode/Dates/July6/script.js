var examples = [
  "APPLE",
  "Apple Cider",
  "   applesauce",
  "apple pie",
  "green apples",
];
var ans = [];

for (var i = 0; i < examples.length; i++) {
  var word = examples[i].trim().toLowerCase();
  var sub = word.substring(0, 5);
  if (sub === "apple") {
    ans.push(word);
  }
}

console.log(ans.sort());
