






/*FILE SCREEM*/


$(document).on('click', '.file_screen--a img', function(event){

  $('.file_screen--a_selected').removeClass('file_screen--a_selected');
  $(this).addClass('file_screen--a_selected');

}); /*.file_screen--a img*/



/*FILE IN CARD*/
/*FILE IN CARD*/
/*FILE IN CARD*/
/*FILE IN CARD*/
/*FILE IN CARD*/

$(document).on('click', '.change_file_view', function(event){



  if ( $(this).closest('.card').hasClass('file_in_list_view')  ){
       $(this).closest('.card').removeClass('file_in_list_view');
       $(this).find('use').attr('xlink:href',"css/svg.svg#list");  
  }
  else{
     $(this).closest('.card').addClass('file_in_list_view');
     $(this).find('use').attr('xlink:href',"css/svg.svg#grid"); 
  }





}); /*.file_cont--check*/


$(document).on('click', '.file_cont--check', function(event){

  if ( $(this).closest('.file_cont').hasClass( "file_selected" ) ){
       $(this).closest('.file_cont').removeClass( "file_selected" ); 
      
       var elem_selected=false;

     $(this).closest('.card').find('.file_cont').each(function(){
      if ( $(this).hasClass( "file_selected" ) ) { 
          elem_selected=true;
          return;
      }

      });



         if ( elem_selected == false ) {

          $(this).closest('.file').removeClass( "file_selecting" ); 
          $(this).closest('.fullcont').find('.appbar__cont-principal').removeClass('dn');
          $(this).closest('.fullcont').find('.appbar__cont-file').addClass('dn');   

          /*Menu label counter*/ 
          $(this).closest('.file').data("selects", "0");

          }/*if*/

          else{

              /*Menu label counter*/ 

            var selects = parseInt( $(this).closest('.file').data('selects') ) - 1 ;
            $(this).closest('.file').data("selects", selects);
            $(this).closest('.fullcont').find(' .appbar__cont-file .file_title').text(selects+' File Selected');

          }
  }

  else{

      $(this).closest('.file_cont').addClass( "file_selected" ); 
      $(this).closest('.file').addClass( "file_selecting" ); 

      /*change the upper menu*/

      $(this).closest('.fullcont').find('.appbar__cont-principal').addClass('dn');
      $(this).closest('.fullcont').find('.appbar__cont-file').removeClass('dn'); 

      /*Menu label counter*/ 

      var selects = parseInt( $(this).closest('.file').data('selects') ) + 1 ;
      $(this).closest('.file').data("selects", selects);
      $(this).closest('.fullcont').find(' .appbar__cont-file .file_title').text(selects+' File Selected');

  }/*else*/



}); /*.file_cont--check*/





$(document).on('click', '.file_cont--img', function(event){



  /*this files ares in selecting mode?*/

  if ( $(this).closest('.file').hasClass( "file_selecting" )){



    if (  $(this).closest('.file_cont').hasClass( "file_selected" )  ){
          $(this).closest('.file_cont').removeClass( "file_selected" );

            /*Menu label counter*/ 

          var selects = parseInt( $(this).closest('.file').data('selects') ) - 1 ;

          $(this).closest('.file').data("selects", selects);
          $(this).closest('.fullcont').find(' .appbar__cont-file .file_title').text(selects+' File Selected');

            



        var elem_selected=false;

        $(this).closest('.file').find('.file_cont').each(function(){
            if ( $(this).hasClass( "file_selected" ) ) { 
                elem_selected=true;
              return;
            }/*if*/

        });



      if ( elem_selected == false ) {

        $(this).closest('.file').removeClass( "file_selecting" ); 
        $(this).closest('.fullcont').find('.appbar__cont-principal').removeClass('dn');
        $(this).closest('.fullcont').find('.appbar__cont-file').addClass('dn');     
          /*Menu label counter*/ 
          $(this).closest('.file').data("selects", "0");
      }/*if*/

    }/*if*/



    else{

       $(this).closest('.file_cont').addClass( "file_selected" );

      /*Menu label counter*/ 

      var selects = parseInt( $(this).closest('.file').data('selects') ) + 1 ;
      $(this).closest('.file').data("selects", selects);
      $(this).closest('.fullcont').find(' .appbar__cont-file .file_title').text(selects+' File Selected');


    }

    

  }/*if*/



  else{ return; }



}); /*.file_cont--img*/











$(document).on('click', '.file_select_cancel', function(event){

      $(this).closest('.fullcont').find('.appbar__cont-principal').removeClass('dn');
      $(this).closest('.fullcont').find('.appbar__cont-file').addClass('dn');   
      $(this).closest('.fullcont').find('.file').removeClass( "file_selecting" ); 
      $(this).closest('.fullcont').find('.file').data("selects", "0");
      $(this).closest('.fullcont').find('.file_cont').each(function(){
      $(this).removeClass( "file_selected" ); 

        });      



}); /*file_select_cancel*/











/*

                   FILE SCREEM

                   FILE SCREEM

                   FILE SCREEM





*/





function file_screen__show(){ 





  $(".file_screen").addClass('file_screen__show');     

  $('#scrim__s' ).addClass('scrim__show');

  $('#scrim__s').attr('onclick',"file_screen__hide()");



}/*fullcont__show*/





function file_screen__hide(){



  $(".file_screen").removeClass('file_screen__show');     

  $('#scrim__s' ).removeClass('scrim__show');



}











/*

                   FILE SCREEM SINGLE

                   FILE SCREEM SINGLE

                   FILE SCREEM SINGLE



                 

*/



function file_scrim_single__show(src){ 
  $(".file_scrim_single").addClass('file_scrim_single__show');     

  $('#scrim' ).addClass('scrim__show');

  $('#scrim').attr('onclick',"file_scrim_single__hide()");
	 $(".file_scrim_single").find("img").attr("src", src);


}/*fullcont__show*/





function file_scrim_single__hide(){



  $(".file_scrim_single").removeClass('file_scrim_single__show');     

  $('#scrim' ).removeClass('scrim__show');



}



