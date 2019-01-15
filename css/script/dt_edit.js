
$(document).on('click', '.td_edit', function(event){

 	$('.td_edit__popup').find('.input textarea').val( 'I*ve read all the answers on to this questions and none of the solutions seem to'   );

	if ( $( window ).width() > 900) { 

		  var pos=$(this).offset();
		  var px=0; var py=0; 


		  if (pos.left+ $('.td_edit__popup').width() > $( window ).width() ){
		         px = pos.left - $('.td_edit__popup').width();  }
		  else { px = pos.left;} 

		  if ( pos.top+ $('.td_edit__popup').height() > $( window ).height() ){
		         py = (pos.top - $('.td_edit__popup').height() );  }
		  else { py = pos.top; }
		  
		  $('.td_edit__popup').css({ top :py, left :px} ); 

	}
	else {
	 	$('.td_edit__popup').css({'top': '0px', 'left' :'0px'} ); 
	}

	  $('#td_edit_123').addClass('td_edit__popup__show');
	  $('.scrim__s' ).addClass('scrim__show');
	  $('.scrim__s').attr('onclick',"td_edit__hide('"+'dt_editcc_id'+"')");	


	///simulate keyup on input $(this).text()
	 var e = jQuery.Event("keydown");
	 e.which = 50; // # Some key code value
	 $('.td_edit__popup').find('.input textarea').trigger(e);
	 $('.td_edit__popup').find('.input textarea').focus();
		
});





function td_edit__hide(id){

	$(".td_edit__popup").removeClass('td_edit__popup__show');
	$('.scrim__s' ).removeClass('scrim__show');
	$("#"+id).find('.input textarea').val('');

}

