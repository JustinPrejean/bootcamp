const asciiHeart = require("ascii-heart");

console.log(asciiHeart());

console.log(asciiHeart(10, 10));

console.log(
  asciiHeart(40, 40, {
    fill: "❤"
  })
);

console.log(
  asciiHeart(20, 40, {
    fill: "%"
  })
);
