var lbs = document.getElementById("lbsInput");
var kg = document.getElementById("kgInput");
var miles = document.getElementById("milesInput");
var km = document.getElementById("kmInput");

// As user types into lbs text input - Kg is updated with conversion
lbs.addEventListener("keyup", () => {
  var newKg = lbs.value * 2.2;
  kg.value = newKg.toFixed(2);
});

// As user types into kg text input - lbs is updated with conversion
kg.addEventListener("keyup", () => {
  var newLbs = kg.value / 2.2;
  lbs.value = newLbs.toFixed(2);
});

// As user types into miles text input - km is updated with conversion
miles.addEventListener("keyup", () => {
  var newKm = miles.value * 1.61;
  km.value = newKm.toFixed(2);
});

// As user types into kim text input - miles is updated with conversion
km.addEventListener("keyup", () => {
  var newMiles = km.value / 1.61;
  miles.value = newMiles.toFixed(2);
});
