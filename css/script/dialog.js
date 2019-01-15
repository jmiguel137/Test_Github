

function dialog__show(id){
		
		$('#scrim__s' ).addClass('scrim__show');
	    $('#scrim__s').attr('onclick',"dialog__hide('"+id+"')");	 	
		$('#'+id).addClass('dialog__show');

}



function dialog__hide(id){
		
		$('#scrim__s' ).removeClass('scrim__show');
		$('#'+id ).removeClass('dialog__show');
}


$(document).on('click', '.dialog__cancel', function(event){
	$(this).closest('.dialog').removeClass('dialog__show');
	$('#scrim__s' ).removeClass('scrim__show');


});




////LOADING ANIMATION ON BTN
$(document).on('click', '.btn_query', function(event){
	if ( !$(this).hasClass('btn_busy') ){
		  $(this).addClass('btn_busy');
		 //$(this).find('label').text('');
		 $(this).append('<svg  ><use xlink:href="css/svg.svg#refresh"></use></svg>')	

	}


});

function btn_query_restore(id){
	$('#'+id).removeClass('btn_busy');
	$('#'+id).find('svg').remove();
}

function btn_query_status(id){
	
   if ( $('#'+id).hasClass('btn_busy') ) {
	    snack__show('Please Wait');
	   	return true; 
	}

	return false;
}


