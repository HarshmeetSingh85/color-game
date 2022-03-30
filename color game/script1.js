var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = randomColorG();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyButton");
var hardBtn = document.querySelector("#hardButton");
easyBtn.addEventListener("click", function () {
  //highlight button to show selected
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  //set number of squares to 3
  numSquares = 3;
  //change colors to 3
  colors = generateRandomColors(numSquares);
  //reset winning color
  pickedColor = randomColorG();
  //change display to show new picked color
  colorDisplay.textContent = pickedColor;
  //loop through 3 squares and reset colors while displaying none for squares without new reset colors
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = randomColorG();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});
resetButton.addEventListener("click", function () {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = randomColorG();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  //set winning color highlight back to default
  h1.style.background = "rgb(122, 0, 65)";
});
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function () {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
    } else {
      this.style.backgroundColor = "rgb(240, 208, 150)";
      messageDisplay.textContent = "Try Again";
    }
  });
}
function changeColors(colorz) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color to match given color
    squares[i].style.background = colorz;
  }
}
function randomColorG() {
  //pick a random number
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(genColor) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < genColor; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}
function randomColor() {
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
