


$(document).on("click", ".autocomplete_db",function() {  
  
  console.log('from top '  + $(this).offset().top);
  console.log('from left ' + $(this).offset().left);

  var px=0; var py=0; 
  var elem_x = $(this).offset().left;
  var elem_y = $(this).offset().top;
  
  if ( elem_x+ $('#autocomplete_menu').width() > $( window ).width() ){
         px = elem_x - $('#autocomplete_menu').width();  }
  else { px = elem_x;} 

  if ( elem_y+ $('#autocomplete_menu').height() > $( window ).height() ){
         py = elem_y - $('#autocomplete_menu').height();  }
  else { py = elem_y;}

  $('#autocomplete_menu').css({top :py+50, left :px} ); 

  

});



$(document).on("keydown", ".autocomplete_db",function(e) {  

/* 37 left | up 38 | 39 right | 40 down */

 if ( e.keyCode == 40 ){
  //alert('miguel');
  if ( $('#autocomplete_menu .menu__elem').hasClass('menu__elem--selected') ) {

    var _this =  $('#autocomplete_menu .menu__elem--selected');
    $('#autocomplete_menu .menu__elem').removeClass('menu__elem--selected'); 
    $(_this).next('.menu__elem').addClass('menu__elem--selected');
    autocomplete_change();
    return;
  }

  else{

   $('#autocomplete_menu .menu__elem:nth-child(1)').addClass('menu__elem--selected');
    autocomplete_change();
    return;
  
  }


}/*e.keyCode == 40 */

 if ( e.keyCode == 38 ){


  if ( $('#autocomplete_menu .menu__elem').hasClass('menu__elem--selected') ) {

        if ( $('.menu__elem--selected').index() == 0  ){

             $('#autocomplete_menu .menu__elem').removeClass('menu__elem--selected'); 
             $(this).val(   $(this).data('user_value' )   );
        }   
         
    var _this =  $('#autocomplete_menu .menu__elem--selected');
    $('#autocomplete_menu .menu__elem').removeClass('menu__elem--selected'); 
    $(_this).prev('.menu__elem').addClass('menu__elem--selected');
    autocomplete_change();

    return;
  }

return;

}/*e.keyCode == 38 */



 if ( e.keyCode == 13 ){

    $(this).val(  $('#autocomplete_menu .menu__elem--selected label').text() );
    $('#autocomplete_menu .menu__elem').removeClass('menu__elem--selected'); 
    $('#autocomplete_menu').removeClass('menu__show'); 

  $('#autocomplete_menu').removeClass('menu__show');
  $('#scrim__s' ).removeClass('scrim__show');
    return;
 }


  $(this).data('user_value', $(this).val() );



});





function autocomplete_change(){
    console.log('this is the value ' + $('.autocomplete--element_selected').text() );
    $('.autocomplete--element_selected').closest('.input').find('.autocomplete_db').val( $('.autocomplete--element_selected').text() );
    $('.autocomplete--element_selected').closest('.input').find('.input__clear').addClass( "input__clear__show" ); 
    $('.autocomplete--element_selected').closest('.input').find('.input__label').addClass( "input__label--filled" );  
  


}


