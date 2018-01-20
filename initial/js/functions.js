function singSong() {

	console.log("Twinkle ... ");
	console.log("Little start ... ");
}

function kebabToSnake(input){

	var output ="";
	for (var i=0; i<input.length;i+=1){
		console.log("input[i]" + input[i]);
		if (input[i] === "-" ){
			output += "_";
		}
		else {
			output += input[i];
		}
	}
	return output;
}

function someFunction(a,b){

	var important = a;
	var moreImportant = b;

	var f = function xyz(x,y,z){

		return important * x + moreImportant * y + z;
	}

	anotherFunction(f);
}

function anotherFunction(f){
	console.log(f(1,2,3));
}

