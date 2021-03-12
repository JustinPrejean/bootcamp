var name = prompt("Tell me your name.");
var num1 = prompt("Give me a number.");
var num2 = prompt("Give me another number, please.");

function day(str) {
  return "You are going to have a wonderful day, " + str + ". ";
}

function sum(number, number2) {
  num1 = Number(number);
  num2 = Number(number2);
  var total = num1 + num2;
  return "By the way, the sum of your numbers is " + total + ".";
}

document.write(day(name) + " " + sum(num1, num2));
