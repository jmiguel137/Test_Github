




$('.slider__element').on('input', function() {
	
	$(this).closest('.input').find('.slider__input').val( $(this).val() );
	$(this).closest('.input').find('.input__helper').text( '' );

});


$('.slider__input').on('input', function() {

	$(this).closest('.input').find('.slider__element').val( $(this).val() );

});
