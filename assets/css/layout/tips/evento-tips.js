$('.item-video').on("click", function(event){
	// var html = $(this).html();
	var urlvideo = $(this).children().attr('src');

	$(".video").html('<iframe src="'+urlvideo+'?rel=0&autoplay=1" autoplay frameborder="0" allowfullscreen></iframe>');
})
$('.imagen1').on('mouseenter', function(){
	console.log('entro');
	$(this).removeClass().addClass('imagen1-hover');

}).on('mouseleave', function(){
	$(this).removeClass().addClass('imagen1');
})

$('.imagen2').on('mouseenter', function(){
	console.log('entro');
	$(this).removeClass().addClass('imagen2-hover');
	
}).on('mouseleave', function(){
	$(this).removeClass().addClass('imagen2');
})

