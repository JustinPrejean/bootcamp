var image = document.getElementById("image");
var next = document.getElementById("next");
var prev = document.getElementById("previous");
var images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];
var count = 0;

function nextPhoto() {
  count++;
  if (count > 5) {
    count = 0;
  }
  image.src = images[count];
}

function lastPhoto() {
  count--;
  if (count < 0) {
    count = 5;
  }
  image.src = images[count];
}
