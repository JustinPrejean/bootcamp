var num1 = prompt("Give me a number.");
var num2 = prompt("Give me another number.");
var num3 = prompt("One more number, please.");

function sum(n1, n2, n3) {
  var nums = [n1, n2, n3];
  var sum = 0;

  for (var i = 0; i < nums.length; i++) {
    nums[i] = Number(nums[i]);
    sum += nums[i];
  }
  return "The sum of all of your numbers is " + sum + ".";
}

document.write(sum(num1, num2, num3));
