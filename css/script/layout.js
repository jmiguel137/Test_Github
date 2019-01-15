



$("#body").scroll(function () {
///console.log($( window ).width());

	var cont_height  =document.getElementById('body').scrollHeight;
	var cont_scrolled =parseInt( $("#body").scrollTop() );

if ( cont_scrolled > 10) {

	if ($( window ).width() >=900 ){ $('#appbar').addClass('bs_6'); }
	else { $('#appbar').addClass('bs_6');  }	


}	
else{ 	$('#appbar').removeClass('bs_6');  }


});





