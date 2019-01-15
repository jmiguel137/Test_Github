


///CHECKBOX CONTROL

///ORDER EFFECT CONTROL 
$(document).on("click", ".th_order",function() {


	 var status = this.getAttribute("data-status");

	 $(this).closest('.dt').find('.th_order').not(this).removeClass('th_order--1'); 
	 $(this).closest('.dt').find('.th_order').not(this).removeClass('th_order--2'); 

		if 		( $(this).hasClass('th_order--1') ){
			 	  $(this).removeClass('th_order--1');
			      $(this).addClass('th_order--2'); 
		}
		else if ( $(this).hasClass('th_order--2') ){
			      $(this).removeClass('th_order--2');
		}
		else {
			      $(this).addClass('th_order--1');
		}


});

///HANDLE LOADING STATUS
function loading_more_status( s ){

	$('#'+cu+'_main .dt__footer').removeClass('dt__footer--actived');
	$('#'+cu+'_main .dt__footer').removeClass('dt__footer--disabled');
	$('#'+cu+'_main .dt__footer').removeClass('dt__footer--loading');


	$('#'+cu+'_main .dt__footer').addClass(s);


}


///ORDER SEACH EFFECT
$(document).on("click", ".dt__header--search svg",function() {

	if ( $(this).closest('.dt__header ').hasClass('dt__header__show--search')  ){
		 $(this).closest('.dt__header ').removeClass('dt__header__show--search');
		 $(this).closest('.dt__header ').find('input').val('');
		 $(this).closest('.dt__header ').find('input').trigger('change');
		 


	}
	else{
		$(this).closest('.dt__header ').addClass('dt__header__show--search');
		$(this).closest('.dt__header ').find('input').focus();
	}

});





///CHECKBOX CANCEL
$(document).on("click", ".dt__header--icon_cancel",function() {

		 $(this).closest('.dt__header').removeClass('dt__header__show--delete') ;
 		 $(this).closest('.dt').removeClass('dt__gocheck') ;		 

});



///CHECKBOX CONTROL - INIDIVIDUAL
$(document).on("click", "tr td:first-child",function() {
	if ( $(this).hasClass('td_checked')  ){ 
		 $(this).removeClass('td_checked');					  
	}
	else{
		$(this).addClass('td_checked');
	}
});


///CHECKBOX CONTROL - GRUPAL
$(document).on("click", "tr th:first-child",function() {

	if ( $(this).hasClass('td_checked')  ){ 
		 $(this).removeClass('td_checked');
		 $(this).closest('table').find('tr td:first-child').removeClass('td_checked'); 
				  
	}

	else{
		$(this).addClass('td_checked');
		$(this).closest('table').find('tr td:first-child').addClass('td_checked');  
	}
});




$(document).on('click', '.dt__header--options', function(){




  $('#dt_menu .ms').attr('onclick',"dt_ms('"+ $(this).closest('.dt').attr('id') +"')"); 

	//show__menu('dt_menu');


});



///CHECKBOX CONTROL - ONPEN CHECK BOX SELECTION
/*
$('.entity_main').on('click', '.multi_selection', function(){

	alert();

	$("#"+cu+"_table").closest('.dt__header').addClass('dt__header__show--delete');

});

/*
function dt_ms( id ){ 

	console.log(id);

	if ( $('#'+id).hasClass('dt__gocheck')  ){
		 $('#'+id).removeClass('dt__gocheck');
		 $('#'+id+' .dt__header').removeClass('dt__header__show--delete');

		 $('#'+id).find('tr th:first-child').removeClass('td_checked');
		 $('#'+id).find('tr td:first-child').removeClass('td_checked'); 
	}

	else{
		$('#'+id).addClass('dt__gocheck');
		$('#'+id+' .dt__header').addClass('dt__header__show--delete');
	}

}

*/

/*

//EVENT FOR TOOGGLING STATUS OF ALL CHECKBOXES IN TABLE ROWS//
$(".entity_main").on("change", ".table_check_all", function(){
	var tn = cu; 
	$( "."+tn+"_table_chks" ).prop("checked", $(this).is(":checked"));	
	$( "."+tn+"_table_chks" ).attr("checked", $(this).is(":checked"));	
	entities_properties[tn].N_check_all = $(this).is(":checked");
	if($(this).is(":checked")){
		entities_properties[tn].data.map(function(x) { x.N_html_chk = " checked ";	});
	}
	else{
		entities_properties[tn].data.map(function(x) {x.N_html_chk = " ";	})
	}	
});



*/