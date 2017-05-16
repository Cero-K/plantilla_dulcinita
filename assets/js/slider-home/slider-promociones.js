//almacenar slider en una variable
var slider1_promociones = $('#slider1-promociones');
var slider2_promociones = $('#slider2-promociones');
var slider3_promociones = $('#slider3-promociones');
var slider4_promociones = $('#slider4-promociones');

//almacenar botones
var nextPromociones = $('#btn-next-promociones');
var prevPromociones = $('#btn-prev-promociones');

//mover ultima imagen al primer lugar
$('#slider1-promociones .slider__section1-promociones:last').insertBefore('#slider1-promociones .slider__section1-promociones:first');
$('#slider2-promociones .slider__section2-promociones:last').insertBefore('#slider2-promociones .slider__section2-promociones:first');
$('#slider3-promociones .slider__section3-promociones:last').insertBefore('#slider3-promociones .slider__section3-promociones:first');
$('#slider4-promociones .slider__section4-promociones:last').insertBefore('#slider4-promociones .slider__section4-promociones:first');

//mostrar la primera imagen con un margen de -100%
slider1_promociones.css('margin-left', '-'+100+'%');
slider2_promociones.css('margin-left', '-'+100+'%');
slider3_promociones.css('margin-left', '-'+100+'%');
slider4_promociones.css('margin-left', '-'+100+'%');

function moverDerecha_promociones() {
	slider1_promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider1-promociones .slider__section1-promociones:first').insertAfter('#slider1-promociones .slider__section1-promociones:last');
		slider1_promociones.css('margin-left', '-'+100+'%');
	});

	slider2_promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider2-promociones .slider__section2-promociones:first').insertAfter('#slider2-promociones .slider__section2-promociones:last');
		slider2_promociones.css('margin-left', '-'+100+'%');
	});

	slider3_promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider3-promociones .slider__section3-promociones:first').insertAfter('#slider3-promociones .slider__section3-promociones:last');
		slider3_promociones.css('margin-left', '-'+100+'%');
	});

	slider4_promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider4-promociones .slider__section4-promociones:first').insertAfter('#slider4-promociones .slider__section4-promociones:last');
		slider4_promociones.css('margin-left', '-'+100+'%');
	});
}

function moverIzquierda_promociones() {
	slider1_promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider1-promociones .slider__section1-promociones:last').insertBefore('#slider1-promociones .slider__section1-promociones:first');
		slider1_promociones.css('margin-left', '-'+100+'%');
	});

	slider2_promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider2-promociones .slider__section2-promociones:last').insertBefore('#slider2-promociones .slider__section2-promociones:first');
		slider2_promociones.css('margin-left', '-'+100+'%');
	});

	slider3_promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider3-promociones .slider__section3-promociones:last').insertBefore('#slider3-promociones .slider__section3-promociones:first');
		slider3_promociones.css('margin-left', '-'+100+'%');
	});

	slider4_promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider4-promociones .slider__section4-promociones:last').insertBefore('#slider4-promociones .slider__section4-promociones:first');
		slider4_promociones.css('margin-left', '-'+100+'%');
	});
}

function autoplay_promociones() {
	interval_promociones = setInterval(function(){
		moverDerecha_promociones();
	}, 5000);
}

nextPromociones.on('click',function() {
	moverDerecha_promociones();
	clearInterval(interval_promociones);
	autoplay_promociones();
});

prevPromociones.on('click',function() {
	moverIzquierda_promociones();
	clearInterval(interval_promociones);
	autoplay_promociones();
});


autoplay_promociones();