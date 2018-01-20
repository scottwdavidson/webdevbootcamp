console.log("Connected!");
var todos = [];
var todosIndex = 0;
var command = "";

do {

	command = prompt("Please type in a command");

	// Add a new item to the TODO list
	if ( "new" === command ){
		todos[todosIndex] = prompt("Please type in new todo item:");
		console.log(todos[todosIndex] + " added to the list.");
		todosIndex +=1;
	}

	else if ( "list" === command ){

		console.log("*****************")
		todos.forEach(
			function(todo, index){
				console.log(index + ": " + todo);
			});
		console.log("*****************")
	}

	else if ( "delete" === command ){
		
		var indexToDelete = prompt("Please type in index to delete:");

		// Only attempt to delete if specified index is w/in range 
		if ( indexToDelete >=0 && indexToDelete < todos.length ){
			todos.splice(indexToDelete,1);
		}

		console.log(" Deleted a Todo.");

	}


} while ( ! (command === "quit"));

console.log("Good bye! ( " + command + ")");