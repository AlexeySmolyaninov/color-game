var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButto = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
};

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add listeners
		squares[i].addEventListener("click", function(){
		var clickColor = this.style.backgroundColor
		if (clickColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButto.textContent = "Play Again?";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
		});
	}
}

function reset(){
	//generate new Colors
	colors = generateRandomColors(numOfSquares);
	//pick new color
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	resetButto.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelBlue";
}

resetButto.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	//change all squares to the correct choise
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var colors = [];
	for(var i = 0; i < num; i++){
		colors.push(randomColor());
	}
	return colors;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}
