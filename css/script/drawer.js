


$(document).on("click", ".open_drawer",function() {

	if ( $('.drawer').hasClass('drawer__show')  ){
		 $('.drawer').removeClass('drawer__show'); 
	}
	else{
		$('.drawer').addClass('drawer__show');
		$('.scrim__default' ).addClass('scrim__show');

  		$('.scrim__default').attr('onclick',"hide_drawer()");	
	}

});



function hide_drawer(){
		$('.drawer').removeClass('drawer__show');
		$('.scrim__default' ).removeClass('scrim__show');

}


$(document).on("click", ".drawer__elem",function() {

	$('.drawer__elem').removeClass('drawer__elem--selected');
	$(this).addClass('drawer__elem--selected');

	setTimeout(function() { 
		hide_drawer();
	}, 300);	

});	
