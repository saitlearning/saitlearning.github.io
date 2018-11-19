$(function(){

	$(".read_more").on('click', function(e){
		e.preventDefault();
		$(this).parent().siblings('.hidden_text').toggle();
	});

});