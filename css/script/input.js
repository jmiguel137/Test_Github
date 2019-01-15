



$(document).on('change keyup paste keydown', '.input__element', function(){


	if( $(this).val() == ''  ){

		$(this).closest('.input').find('.input__clear').removeClass( "input__clear__show" ); 
		$(this).closest('.input').find('.input__label').removeClass( "input__label--filled" ); 
	}
	else{ 
		$(this).closest('.input').find('.input__clear').addClass( "input__clear__show" ); 
		$(this).closest('.input').find('.input__label').addClass( "input__label--filled" );


	}

});	

////Clear handle on input_cont__input
$(document).on('click', '.input__clear', function(event){

	if ($(this).hasClass('show_pass')) { return;  }
	
	$(this).closest('.input').find('.input__element').val('');  
	$(this).closest('.input').find('.input__element').focus();  
    $(this).closest('.input').find('.input__helper').text(""); 
   	$(this).closest('.input').find('.input__label').removeClass('input__label--filled');  
	$(this).removeClass('input__clear__show'); 
    $(this).closest('.input').find('.input__element--textarea').css('height', '55px');  
	
	if ($(this).hasClass('autocomplete_db')) { 
		current_autocomplete=$(this).closest('.input').find('.input__element');  
	}


});	





$(".form").on("blur", ".input_required",function(event) {

	if( $(this).val() == "" && !$(this).closest('.input').hasClass( "input--error" )  ){

		$(this).closest('.input').addClass( "input--error" );  
		$(this).closest('.input').find('.input__helper').text( "*Required" );  
	    $(this).closest('.input').find('.input__element').focus();  	
		$(this).closest(".input").find('.input__clear use').attr("xlink:href", "css/svg.svg#info");

	}
	else if( $(this).val() == "" && $(this).closest('.input').hasClass( "input--error" )  ){
		return;
	}

	else{

		$(this).closest('.input').removeClass( "input--error" );  
		$(this).closest('.input').find('.input__helper').text( "" );	
		$(this).closest(".input").find('.input__clear use').attr("xlink:href", "css/svg.svg#cancel");
	}


});



$(document).on("change keyup paste keydown", ".input__element--textarea",function() {
	
	  var el = this;
	  setTimeout(function(){
	    el.style.cssText = 'height:auto; padding:0';
	    // for box-sizing other than "content-box" use:
	     el.style.cssText = '-moz-box-sizing:content-box';
	     el.style.cssText = 'height:' + el.scrollHeight + 'px';
	  },0);
});

$(document).on("change keyup paste keydown", ".chat__input textarea",function() {
	
	  var el = this;
	  setTimeout(function(){
	    el.style.cssText = 'height:auto; padding:0';
	    // for box-sizing other than "content-box" use:
	     el.style.cssText = '-moz-box-sizing:content-box';
	     el.style.cssText = 'height:' + el.scrollHeight + 'px';
	  },0);
});


/*
function is_filled(id){

    $("#"+id+" .input .input__element ").each(function(){
    	if ( $(this).val() != "" ) {
    		 $(this).closest('.input').find('.input__label').addClass('input__label--filled');
    	}

    });


}
*/