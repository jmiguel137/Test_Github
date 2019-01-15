

$(document).on("click", ".open_sidesheet",function() {

	if ( $('.body').hasClass('body__show_sidesheet')  ){
		 $('.body').removeClass('body__show_sidesheet'); 
		 $('.sidesheet').removeClass('sidesheet__show'); 
	}

	else{
		$('.body').addClass('body__show_sidesheet');
   	    $('.sidesheet').addClass('sidesheet__show'); 
   		
   		if ($(document).width() < 900) { 
   			$('.scrim__default' ).addClass('scrim__show');
   	    	$('.scrim__default').attr('onclick',"hide_sidesheet()");	 
		}

	}

});

function hide_sidesheet(){
		$('.sidesheet').removeClass('sidesheet__show');
		$('.body').removeClass('body__show_sidesheet');

		$('.scrim__default' ).removeClass('scrim__show');

}

