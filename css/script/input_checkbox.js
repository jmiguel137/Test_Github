


///////CHECK BOX
$(document).on("click", ".selection--checkbox",function() {


if ( $(this).hasClass('selection--disabled')  ) { return; }
  
  if (  $(this).children('[type=checkbox]').prop( "checked" ) ){
        $(this).children('[type=checkbox]').prop( "checked", false ); }
  else{ $(this).children('[type=checkbox]').prop( "checked", true );  }


});



///////RADIO
$(document).on("click", ".selection--radio",function() {
      $(this).children().prop( "checked", true );
});

