


////FLOATBTN WITH SUB MENU
function floatbtn__show(id){ 
		$("#"+id).addClass('floatbtn__show'); 
		$('.scrim__floatbtn' ).addClass('scrim__show');
    	$('.scrim__floatbtn').attr('onclick',"floatbtn__hide('"+id+"')");	 
}

function floatbtn__hide(id){
		$("#"+id).removeClass('floatbtn__show');
		$('.scrim__floatbtn' ).removeClass('scrim__show');

}



////FLOATBTN WITH SUB BTNS


$(document).on("click", ".floatbtn_with_subbtn",function() {

	if ( $(this).hasClass('floatbtn__show_subbtn')  ){
		 $(this).removeClass('floatbtn__show_subbtn'); 
		 $('.scrim__floatbtn' ).removeClass('scrim__show');
	}

	else{
		$(this).addClass('floatbtn__show_subbtn');
   		$('.scrim__floatbtn' ).addClass('scrim__show');
    	$('.scrim__floatbtn').attr('onclick',"floatbtn_with_subbtn__hide('"+ $(this).attr("id") +"')");	
	}

});

function floatbtn_with_subbtn__hide(id){
		$("#"+id).removeClass('floatbtn__show_subbtn');
		$('.scrim__floatbtn' ).removeClass('scrim__show');

}