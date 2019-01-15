

$(document).on('click', '.menu__elem', function(event){

  	$(this).closest('.menu').removeClass('menu__show');
  	if ( !$(this).hasClass('open_other') ) { $('#scrim__s' ).removeClass('scrim__show'); } 

});



function menu__hide(id){
	
	$("#"+id).removeClass('menu__show');
	$('#scrim__s' ).removeClass('scrim__show');

}


$(document).on('click', '.ticket--options', function(event){

	show__menu('ticket_menu');

});


function show__menu(id){

  var px=0; var py=0; 
  if ( event.clientX+ $('#'+id).width() > $( window ).width() ){
         px = event.clientX - $('#'+id).width();  }
  else { px = event.clientX;} 

  if ( event.clientY+ $('#'+id).height() > $( window ).height() ){
         py = event.clientY - $('#'+id).height();  }
  else { py = event.clientY;}


  $('#'+id).css({top :py, left :px} ); 
  $('#'+id).addClass('menu__show');


  $('#scrim__s' ).addClass('scrim__show');
  $('#scrim__s').attr('onclick',"menu__hide('"+id+"')");	 


}

