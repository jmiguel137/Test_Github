


function fullcont__show(id){
	if (typeof(entities_properties[cu].after_open_edit_popup) === "function") { //IF THERE IS SOMETHING TO EXECUTE FOR THIS SPECIFIC ENTITY AFTER OPENING EDIT-POPUP
		entities_properties[cu].after_open_edit_popup();
	}
	$("#"+id).addClass('fullcont__show');     
    $('#scrim' ).addClass('scrim__show');
	$('#scrim').attr('onclick',"fullcont__hide('"+id+"')");
	 $("#"+id +' .input__element').trigger('change');
	if(id.indexOf("form") > 0) {//IF THE FULL CONTAINER IT'S A FILLEABLE FORM
		refresh_inputs_correction(); 
		snack__hide_loading();		
	}
}

function fullcont__hide(id){

	$('#'+id).closest('.fullcont').removeClass('fullcont__show');
    $('#scrim' ).removeClass('scrim__show');

}

////////BACK ON FULL CONT
$(document).on("click", ".fullcont--hide",function() {

	$(this).closest('.fullcont').removeClass('fullcont__show');
    $('#scrim' ).removeClass('scrim__show');

});


///SHADOWN EFFECT WHEN SCROLL DONW ON FULLCONT BODY

//$(".fullcont__body").scroll(function () {
//$(".fullcont__body").on("scroll",function(event) {
$(".form").on("scroll", ".fullcont__body",function(event) {
	console.log('scrolled ' + cont_scrolled );

	var cont_height  =document.getElementById( $(this).attr('id') ).scrollHeight;
	var cont_scrolled =parseInt( $(this).scrollTop() );




if ( cont_scrolled > 10) {
		$(this).closest('.fullcont').find('.appbar').addClass('bs_appbar');
}	
else{ 	$(this).closest('.fullcont').find('.appbar').removeClass('bs_appbar'); }


});



$("#body").scroll(function () {
///console.log($( window ).width());

	var cont_height  =document.getElementById('body').scrollHeight;
	var cont_scrolled =parseInt( $("#body").scrollTop() );



if ( cont_scrolled > 10) {

	if ($( window ).width() >=900 ){ $('#appbar').addClass('bs_6'); }
	else { $('#tabbar').addClass('bs_6');  }	


}	
else{ 	$('#appbar').removeClass('bs_6'); 

    }


});





