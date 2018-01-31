// Strike through completed items ( and color them gray )
//
// Notes: the selector must be the UL so that when new LIs 
// are added, the evaluation of UL finds them. Using just LI will
// only work w/ the original list items ( which technically will be none )
$("ul").on("click", "li", function(){
	$(this).toggleClass("todoCompleted");
});

// Remove To Do list item when span is clicked
//
// Notes: originally we used selected on the SPAN, but
// as with the strike through, you must select on the 
// durable element which is the UL.
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(1500, function(){
		$(this).remove();
	});
	
	event.stopPropagation();
});

$("#newToDo").keypress(function(event){
	if ( event.which === 13){

			// Extract the to do list item typed in
			var newToDoItem = $(this).val();

			// Insert it at the end of the ul
			$("ul").append($('<li>').append($('<span>').append('<i class="fa fa-trash" aria-hidden="true"></i>')," " + newToDoItem));  

			// Clear the input text box
			$("#newToDo").val("");
	}
});

$(".fa-plus").on("click", function(){
	$("#newToDo").fadeToggle(1000);
});