//almacenar slider en una variable
var slider1 = $('#slider1');
var slider2 = $('#slider2');
var slider3 = $('#slider3');
var slider4 = $('#slider4');

//almacenar botones
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');

//mover ultima imagen al primer lugar
$('#slider1 .slider__section1:last').insertBefore('#slider1 .slider__section1:first');
$('#slider2 .slider__section2:last').insertBefore('#slider2 .slider__section2:first');
$('#slider3 .slider__section3:last').insertBefore('#slider3 .slider__section3:first');
$('#slider4 .slider__section4:last').insertBefore('#slider4 .slider__section4:first');

//mostrar la primera imagen con un margen de -100%
slider1.css('margin-left', '-'+100+'%');
slider2.css('margin-left', '-'+100+'%');
slider3.css('margin-left', '-'+100+'%');
slider4.css('margin-left', '-'+100+'%');

function moverDerecha() {
	slider1.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider1 .slider__section1:first').insertAfter('#slider1 .slider__section1:last');
		slider1.css('margin-left', '-'+100+'%');
	});

	slider2.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider2 .slider__section2:first').insertAfter('#slider2 .slider__section2:last');
		slider2.css('margin-left', '-'+100+'%');
	});

	slider3.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider3 .slider__section3:first').insertAfter('#slider3 .slider__section3:last');
		slider3.css('margin-left', '-'+100+'%');
	});

	slider4.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider4 .slider__section4:first').insertAfter('#slider4 .slider__section4:last');
		slider4.css('margin-left', '-'+100+'%');
	});
}

function moverIzquierda() {
	slider1.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider1 .slider__section1:last').insertBefore('#slider1 .slider__section1:first');
		slider1.css('margin-left', '-'+100+'%');
	});
	slider2.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider2 .slider__section2:last').insertBefore('#slider2 .slider__section2:first');
		slider2.css('margin-left', '-'+100+'%');
	});
	slider3.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider3 .slider__section3:last').insertBefore('#slider3 .slider__section3:first');
		slider3.css('margin-left', '-'+100+'%');
	});
	slider4.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider4 .slider__section4:last').insertBefore('#slider4 .slider__section4:first');
		slider4.css('margin-left', '-'+100+'%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverDerecha();
	}, 7000);
}

siguiente.on('click',function() {
	moverDerecha();
	clearInterval(interval);
	autoplay();
});

anterior.on('click',function() {
	moverIzquierda();
	clearInterval(interval);
	autoplay();
});

autoplay();