/**********
 * This demonstrates fadeOut, fadeIn and fadeToggle. The analog version of these are
 * slideDown, slideUp and slideToggle.
 **********/

$("button.fadeOutButton").on("click", function(){
	$("div.fadeOut").fadeOut(3000, function(){
		$(this).remove();
	});
})

$("button.fadeInButton").on("click", function(){
	$("div.fadeToggle").fadeToggle(2000);
})
