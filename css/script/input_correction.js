


//////*******************  PHONE
//////*******************  PHONE
//////*******************  PHONE


function refresh_inputs_correction(){

    if    ( $(window).width() < 800 ){ 
    $("#"+cu+"_form_").find('.inp_phone').mask('9999999999'); 
    $("#"+cu+"_form_").find('.inp_phone').closest('.inp_cont').find('.text_helper').text("Complete!");  }
  
  else {  
    $("#"+cu+"_form_").find('.inp_phone').mask("(999) 999-9999");  

  }/*else*/


    $("#"+cu+"_form_").find('.inp_ssn').mask("999-99-9999"); 
    $("#"+cu+"_form_").find('.inp_cash').maskMoney(); 
    $("#"+cu+"_form_").find('.inp_zip').mask("99999");



}/*refresh_inputs_correction*/


$(".form").on("change keyup paste", ".inp_cash",function(event) {
console.log( $(this).val()  );

});/*end text input*/

$(".form").on("change keyup paste", ".inp_phone",function(event) {
 

    var standar = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;  
    var number=$(this).val();

    if(number.match(standar)) {
            $(this).closest('.input').find('.input__helper').text("Complete!");
            return;
    }
    if (   $(this).val() == "(___) ___-____" || $(this).val() == "_________"  ){
           $(this).closest('.input').find('.input__helper').text(""); 
           console.log('remove input phone');   
    }
    
    else{
        $(this).closest('.input').find('.input__helper').text("No complete yet");    
    }


});/*end text input*/



//////*******************  EMAIL
//////*******************  EMAIL
//////*******************  EMAIL


$(".form").on("change keyup paste", ".inp_email",function(event) {

 var standar = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
  if(  standar.test( $(this).val()  )  ){
      $(this).closest('.input').find('.input__helper').text("Complete!");

  }else{
      $(this).closest('.input').find('.input__helper').text("No complete yet");          

 }/*else*/

});/*end text input*/




//////*******************  TEXT
//////*******************  TEXT
//////*******************  TEXT
$(".form").on("change keyup paste", ".inp_text",function(event) {

        var regex = /^[a-zA-Z\s]+$/;

    if ($(this).val() == ""){
       $(this).closest('.input').find('.input__helper').text(""); 
       return;   
    }

    if (! regex.test($(this).val())) {
   		$(this).closest('.input').find('.input__helper').text("Only letters");
        $(this).val($.trim($(this).val()).slice(0, -1));
    }

    else {
    	$(this).closest('.input').find('.input__helper').text("Fine..");
    }

});/*end text input*/



//////*******************  SSN
//////*******************  SSN
//////*******************  SSN

$(".form").on("change keyup paste", ".inp_ssn",function(event) {

	if ($(this).val() == "___-__-____"){
		$(this).closest('.input').find('.input__helper').text("");  
		return;
	}

	var  ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
	if( ssnPattern.test($(this).val()) ){
		$(this).closest('.input').find('.input__helper').text("Complete!"); 
	}

	else{
		$(this).closest('.input').find('.input__helper').text("No complete yet"); 
	}

});



//////*******************  DATE
//////*******************  DATE
//////*******************  DATE
$(".form").on("change keyup paste", "input[type=date]",function(event) {

  var date= $( this  ).val();
  date=date.split('-'); /*[0] year [1]month [2]day*/


  if (date[0]!='' && date[1] !='' && date[1] !='' && parseInt(date[0]) > 1900 && parseInt(date[0]) < 2100){   
    $(this).closest('.input').find('.input__helper').text('Complete!'); 
  }

  else{
	  	if ( parseInt(date[0]) < 1900  ||  parseInt(date[0]) > 2100 ){
	  		 $(this).closest('.input').find('.input__helper').text('Year Unaceptable');
	  	}
	  	else{
	  		 $(this).closest('.input').find('.input__helper').text('No Complete yet!');
	  	}
  	}

 }); /*input[type=date]*/   



//////*******************  SET DATE
//////*******************  SET DATE
//////*******************  SET DATE

$(  document  ).ready(function() {

	var today = new Date();
	var dd    = today.getDate();
	var mm    = today.getMonth()+1; //January is 0!
	var yyyy  = today.getFullYear();

	if(dd<10) { dd = '0'+dd } 
	if(mm<10) { mm = '0'+mm } 
	today = yyyy + '-' + mm + '-' + dd;

	$(".today_date").val(today);
	$(".today_date").closest('.input').find('.input__clear').addClass('input__clear__show');

});
  	


//////*******************  PASSWORD
//////*******************  PASSWORD
//////*******************  PASSWORD


$(document).on('click', '.show_pass', function(event){

  if (    $( this ).prev("input[type=text]").hasClass( "inp_pass" )){
          $( this ).prev("input[type=text]").removeClass( "inp_pass" );
  
  } else{ $( this ).prev("input[type=text]").addClass( "inp_pass" );} 
          
          $(this).closest('.inp_cont').find('input[type=text]').focus(); 
});


$(document).on("click", ".show_pass",function() {


  if ( $(this).closest('.input').find('.input__element').hasClass('inp_pass')  ){


     $(this).closest('.input').find('.input__element').removeClass('inp_pass');
     $(this).closest('.input').find('.input__element').focus(); 
     $(this).children('use').attr('xlink:href',"css/svg.svg#eye-no");   
     $(this).addClass('svg_filled');
  }

  else{

     $(this).closest('.input').find('.input__element').addClass('inp_pass');
     $(this).closest('.input').find('.input__element').focus(); 
     $(this).children('use').attr('xlink:href',"css/svg.svg#eye");    
     $(this).removeClass('svg_filled'); 
  }

});





//////*******************  ZIP
//////*******************  ZIP
//////*******************  ZIP



$(".form").on("change keyup paste", ".inp_zip",function(event) {

    if ($(this).val() == "_____"){
        $(this).closest('.input').find('.input__helper').text(""); 
          return;
      }

  if( $(this).val().match(/^[0-9]+$/) != null ){
      $(this).closest('.input').find('.input__helper').text("Complete!");
  }
    else{
      $(this).closest('.input').find('.input__helper').text("No complete yet");          
    }

});





/********************** SET THE CITY AND STATE FROM ZIPCODE*/
/********************** SET THE CITY AND STATE FROM ZIPCODE*/
/********************** SET THE CITY AND STATE FROM ZIPCODE*/
/*
var act_zip=$(this).attr('id');
$.post("general/zipcode.php",{zip  :$(this).val(),},
function(valores){  

  if (valores=='[]'){
    $('#'+act_zip).closest('.zip_cont').find('.city').val ('');
    $('#'+act_zip).closest('.zip_cont').find('.state').val('');
    remove_inp_text( $('#'+act_zip).closest('.zip_cont').find('.city').attr('id') );
    return
  }
  
  var valores = JSON.parse(valores);
  
  $('#'+act_zip).closest('.zip_cont').find('.city').val (valores[0].city);
  set_inp_text( $('#'+act_zip).closest('.zip_cont').find('.city').attr('id') );
  $('#'+act_zip).closest('.zip_cont').find('.state').val(valores[0].state);




});/*end post*/
 

