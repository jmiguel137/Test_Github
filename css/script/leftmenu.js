
/**/
$(document).on("click", ".leftmenu__elem",function() {

		 	 $('.leftmenu__elem').removeClass('leftmenu__elem--selected');
		 	 $(this).addClass('leftmenu__elem--selected');

});	


$(document).on("click", ".leftmenu__superior--arrow",function() {
	if ( $(this).closest(".leftmenu__superior").hasClass('leftmenu__superior--expanded') ){
	 	 $(this).closest(".leftmenu__superior").removeClass('leftmenu__superior--expanded');
	}
	else{
	 	 $(this).closest(".leftmenu__superior").addClass('leftmenu__superior--expanded');
	}
});	
