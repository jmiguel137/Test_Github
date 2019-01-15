
$(document).on("click", ".cb, .cw",function(e) {	

	var parentOffset = $(this).offset(); 
	var x=e.pageX - parentOffset.left;;
	var y=e.pageY - parentOffset.top;
	$(this).find('.cc').css({'top' : y + 'px', 'left' : x + 'px' });


});	