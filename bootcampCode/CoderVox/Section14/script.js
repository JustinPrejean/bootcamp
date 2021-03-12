// var box = document.getElementById("container");
// var text = document.getElementById("text");
// box.addEventListener("click", changeColor);

// function changeColor() {
//   box.style.backgroundColor =
//     "#" + (((1 << 24) * Math.random()) | 0).toString(16);
//   text.innerHTML = "This ain't new";
// }

// var img = document.querySelector("img");
// img.addEventListener("mouseover", changeImage);
// img.addEventListener("mouseleave", changeBack);

// function changeImage() {
//   img.src =
//     "https://lucidlandscape.com/wp-content/uploads/2014/02/Colorado_Night-5.jpg";
// }

// function changeBack() {
//   img.src =
//     "https://c1.wallpaperflare.com/preview/71/343/581/colorado-rocky-mountain-sunset-mountain.jpg";
// }

// document.getElementById("userText").addEventListener("keyup", function () {
//   var textLength = document.getElementById("userText").value.length;
//   var message = document.getElementById("theMessage");
//   var counter = 10 - textLength;
//   message.textContent = counter + " characterse left";

//   if (count <= 3) {
//     message.style.color = "red";
//   } else {
//     message.style.color = "black";
//   }
// });

var theEmail = document.getElementById("email");
var warning = document.getElementById("theMessage");

theEmail.addEventListener("focus", function () {
  warning.innerHTML = "Please enter a valid email";
  warning.style.color = "blue";
});

theEmail.addEventListener("blur", function () {
  if (theEmail.value == "") {
    alert("The email cannot be blank");
  } else {
    warning.textContent = "";
  }
});
