
function snack__show(text){
	//alert();
		$('#snack').addClass('snack__show');
		$('#snack .snack__label').text(text);
 		//$('.snack_undo').attr('onclick',"snack_undo('"+"this  is undo"+"')");

	    setTimeout(function(){ 
	    	$('#snack').removeClass('snack__show');
   		},6000);

}/*snack__show*/





function snack_undo(text){
	alert(text);

}

function snack__show_img(text, img, tiempo){
	var t = (tiempo * 1000) || 4000;
	//console.log('snack__show_img');

		$('#snack_img').addClass('snack__show');
	    $('#snack_img .snack__label').text(text);
		$('#snack_img svg use').attr('xlink:href', 'css/svg.svg#'+img );  

	    setTimeout(function(){ 
	    	$('#snack_img').removeClass('snack__show');
   		}, t);


}/*snack__show_img*/

function snack__show_undo(text, undo_test){
	//alert();
		$('#snack_undo').addClass('snack__show');
		$('#snack_undo .snack__label').text(text);
		$('#snack_undo .btn label').text(undo_test);
	    setTimeout(function(){ 
	    	$('#snack_undo ').removeClass('snack__show');
   		},6000);

}/*snack__show_undo*/



function snack__show_loading(text){
		$('#snack__loading').addClass('snack__show');
	    $('#snack__loading .snack__label').text(text);
}/*snack__show_img*/


function snack__hide_loading(){
		$('#snack__loading').removeClass('snack__show');
}/*snack__show_img*/
