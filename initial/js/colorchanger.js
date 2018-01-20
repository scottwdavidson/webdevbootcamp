
var myButton = document.querySelector("button");
myButton.addEventListener("click", function(){ 
	myButton.style.background = "red";
	if ( document.body.style.backgroundColor === "orange" ){
		document.body.style.backgroundColor = "purple";
	}
	else {
		document.body.style.backgroundColor = "orange";

	}
});