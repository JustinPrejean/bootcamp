var backgrounds = [
  "url('images/background1.jpg')",
  "url('images/background2.jpg')",
  "url('images/background3.jpg')",
];
var count = 0;

function myFunction() {
  count++;
  if (count > 2) {
    count = 0;
  }
  document.body.style.background = backgrounds[count];
}

setInterval(myFunction, 3000);
