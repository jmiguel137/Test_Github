


///// tt tool tip
	
$(document).on('mouseover', '.tt', function(event){
  
  $('.tooltip').text(this.getAttribute("data-tp"));
  var pos = $(this).offset();	 
  var   y = pos.top + $(this).height() + 8 ;
  var   x = pos.left +  ( $(this).width()/2) - ( $('.tooltip').width()/2 );


   $('.tooltip').css({ top : y, left :x } ); 

   $('.tooltip').addClass('tooltip__show'); 



});

$(document).on('mouseleave', '.tt', function(event){

   $('.tooltip').removeClass('tooltip__show'); 
   $('.tooltip').text('');


});
