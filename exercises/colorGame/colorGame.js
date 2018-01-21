/******************************************
 * Declare global variables and constants
 ******************************************/

// Initialization 
var MAX_NUMBER_OF_COLORS = 6;
var numberOfColors = MAX_NUMBER_OF_COLORS;
var H1_BACKGROUND_COLOR = "steelblue";
var BACKGROUND_COLOR = "rgb(36, 36, 36)";
var colors = [];
var pickedColor;

/******************************************
 * Define DOM element variables
 ******************************************/

// Get the squares and set their event listeners
var squares = document.querySelectorAll(".square");
for (var i=0; i< squares.length; i++){

	// Add CLICK Event Listener
	squares[i].addEventListener("click", function() {
		if ( pickedColor === this.style.backgroundColor ){
			messageDisplay.textContent = "Correct";
			setAllSquaresToSingleColor(pickedColor);
			h1Display.style.background = pickedColor;
			newColorsButton.textContent = "Try Again";

		}
		else {
			this.style.backgroundColor = BACKGROUND_COLOR;
			messageDisplay.textContent = "Try Again";
		}
	});
}

// Set the color display ( the rgb value )
var colorDisplay = document.getElementById("colorDisplay");

// Get the new colors button 
var newColorsButton = document.querySelector("#newColors");
newColorsButton.addEventListener("click", function(){
	initialize();
})

// Get the message 
var messageDisplay = document.querySelector("#message");

// Easy/Hard buttons
var easyButton = document.querySelector("#easyButton");
easyButton.addEventListener("click", function(){
	easyButton.classList.add("buttonSelected");
	hardButton.classList.remove("buttonSelected");
	numberOfColors = 3;
	initialize();
})

var hardButton = document.querySelector("#hardButton");
hardButton.addEventListener("click", function(){
	hardButton.classList.add("buttonSelected");
	easyButton.classList.remove("buttonSelected");
	numberOfColors = MAX_NUMBER_OF_COLORS;
	initialize();
})

// Get the H1
var h1Display = document.querySelector("h1");

/******************************************
 * Initialization
 ******************************************/
 initialize();

/******************************************
 * Define functions
 ******************************************/

 function initialize(){
 	setAllSquaresToRandomColor();
 	setPickedColor();
 	colorDisplay.textContent = pickedColor;
 	messageDisplay.textContent = "";
 	h1Display.style.background = H1_BACKGROUND_COLOR;
 	newColorsButton.textContent = "New Colors";

 }

 function setAllSquaresToSingleColor(color){
 	for (var i=0; i< squares.length; i++){
 		squares[i].style.backgroundColor = color;
 	}
 } 

 function setPickedColor(){
 	pickedColor = colors[Math.floor(Math.random()*numberOfColors)];
 }

 function setAllSquaresToRandomColor(){
 	generateRandomColors();
 	for (var i=0; i< numberOfColors; i++){
 		squares[i].style.display = "block";
 		squares[i].style.backgroundColor = colors[i];
 	}
 	for (var j=i; j< MAX_NUMBER_OF_COLORS; j++){
 		squares[j].style.display = "none";
 	}
 }

 function generateRandomColors() {
 	for(var i=0; i<numberOfColors; i+=1){
 		colors[i] = generateRandomColorString();
 	}
 }

 function generateRandomColorString(){
 	return "rgb(" + 
 	generateRandomColorValue() + ", " +
 	generateRandomColorValue() + ", " +
 	generateRandomColorValue() + ")";
 }

 function generateRandomColorValue(){
 	return Math.floor(Math.random() * 256);
 }