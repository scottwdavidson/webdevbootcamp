var correct = 44;
var guess;

do{
	guess = prompt("you must guess a number");

	if(guess > correct){
		alert("wrong jingles, too high");
	}else if(guess < correct){
		alert("wrong jingles, too low");
	}else {
		alert("correct!!!!!");
		break;
	}
}while(true)
console.log("you won");
