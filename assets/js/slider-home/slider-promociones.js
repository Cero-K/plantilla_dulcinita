//almacena sliders en una variable
var slider1Promociones = $("#slider1-promociones");
var slider2Promociones = $("#slider2-promociones");
var slider3Promociones = $("#slider3-promociones");
var slider4Promociones = $("#slider4-promociones");
var slider5Promociones = $("#slider5-promociones");
var slider6Promociones = $("#slider6-promociones");
var slider7Promociones = $("#slider7-promociones");
var slider8Promociones = $("#slider8-promociones");
var slider9Promociones = $("#slider9-promociones");

//almacenar botones
var anteriorPromociones = $("#btn-prev-promociones");
var siguientePromociones = $("#btn-next-promociones");

//movel última imagen al primer lugar
$('#slider1-promociones .slider__section1-promociones:last').insertBefore('#slider1-promociones .slider__section1-promociones:first');
$('#slider2-promociones .slider__section2-promociones:last').insertBefore('#slider2-promociones .slider__section2-promociones:first');
$('#slider3-promociones .slider__section3-promociones:last').insertBefore('#slider3-promociones .slider__section3-promociones:first');
$('#slider4-promociones .slider__section4-promociones:last').insertBefore('#slider4-promociones .slider__section4-promociones:first');
$('#slider5-promociones .slider__section5-promociones:last').insertBefore('#slider5-promociones .slider__section5-promociones:first');
$('#slider6-promociones .slider__section6-promociones:last').insertBefore('#slider6-promociones .slider__section6-promociones:first');
$('#slider7-promociones .slider__section7-promociones:last').insertBefore('#slider7-promociones .slider__section7-promociones:first');
$('#slider8-promociones .slider__section8-promociones:last').insertBefore('#slider8-promociones .slider__section8-promociones:first');
$('#slider9-promociones .slider__section9-promociones:last').insertBefore('#slider9-promociones .slider__section9-promociones:first');

//mostrar la primera imagen con un margen de -100%
slider1Promociones.css('margin-left', '-'+100+'%');
slider2Promociones.css('margin-left', '-'+100+'%');
slider3Promociones.css('margin-left', '-'+100+'%');
slider4Promociones.css('margin-left', '-'+100+'%');
slider5Promociones.css('margin-left', '-'+100+'%');
slider6Promociones.css('margin-left', '-'+100+'%');
slider7Promociones.css('margin-left', '-'+100+'%');
slider8Promociones.css('margin-left', '-'+100+'%');
slider9Promociones.css('margin-left', '-'+100+'%');


function moverDerechaPromociones(){
	slider1Promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider1-promociones .slider__section1-promociones:first').insertAfter('#slider1-promociones .slider__section1-promociones:last');
		slider1Promociones.css('margin-left', '-'+100+'%');
	});

	slider2Promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider2-promociones .slider__section2-promociones:first').insertAfter('#slider2-promociones .slider__section2-promociones:last');
		slider2Promociones.css('margin-left', '-'+100+'%');
	});

	slider3Promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider3-promociones .slider__section3-promociones:first').insertAfter('#slider3-promociones .slider__section3-promociones:last');
		slider3Promociones.css('margin-left', '-'+100+'%');
	});

	slider4Promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider4-promociones .slider__section4-promociones:first').insertAfter('#slider4-promociones .slider__section4-promociones:last');
		slider4Promociones.css('margin-left', '-'+100+'%');
	});

	slider5Promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider5-promociones .slider__section5-promociones:first').insertAfter('#slider5-promociones .slider__section5-promociones:last');
		slider5Promociones.css('margin-left', '-'+100+'%');
	});

	slider6Promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider6-promociones .slider__section6-promociones:first').insertAfter('#slider6-promociones .slider__section6-promociones:last');
		slider6Promociones.css('margin-left', '-'+100+'%');
	});

	slider7Promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider7-promociones .slider__section7-promociones:first').insertAfter('#slider7-promociones .slider__section7-promociones:last');
		slider7Promociones.css('margin-left', '-'+100+'%');
	});
	slider8Promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider8-promociones .slider__section8-promociones:first').insertAfter('#slider8-promociones .slider__section8-promociones:last');
		slider8Promociones.css('margin-left', '-'+100+'%');
	});
	slider9Promociones.animate({
		marginLeft:'-'+200+'%'
	} ,1000, function(){
		$('#slider9-promociones .slider__section9-promociones:first').insertAfter('#slider9-promociones .slider__section9-promociones:last');
		slider9Promociones.css('margin-left', '-'+100+'%');
	});
}

function moverIzquierdaPromociones() {
	slider1Promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider1-promociones .slider__section1-promociones:last').insertBefore('#slider1-promociones .slider__section1-promociones:first');
		slider1Promociones.css('margin-left', '-'+100+'%');
	});

	slider2Promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider2-promociones .slider__section2-promociones:last').insertBefore('#slider2-promociones .slider__section2-promociones:first');
		slider2Promociones.css('margin-left', '-'+100+'%');
	});

	slider3Promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider3-promociones .slider__section3-promociones:last').insertBefore('#slider3-promociones .slider__section3-promociones:first');
		slider3Promociones.css('margin-left', '-'+100+'%');
	});
	slider4Promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider4-promociones .slider__section4-promociones:last').insertBefore('#slider4-promociones .slider__section4-promociones:first');
		slider4Promociones.css('margin-left', '-'+100+'%');
	});

	slider5Promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider5-promociones .slider__section5-promociones:last').insertBefore('#slider5-promociones .slider__section5-promociones:first');
		slider5Promociones.css('margin-left', '-'+100+'%');
	});

	slider6Promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider6-promociones .slider__section6-promociones:last').insertBefore('#slider6-promociones .slider__section6-promociones:first');
		slider6Promociones.css('margin-left', '-'+100+'%');
	});

	slider7Promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider7-promociones .slider__section7-promociones:last').insertBefore('#slider7-promociones .slider__section7-promociones:first');
		slider7Promociones.css('margin-left', '-'+100+'%');
	});
	slider8Promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider8-promociones .slider__section8-promociones:last').insertBefore('#slider8-promociones .slider__section8-promociones:first');
		slider8Promociones.css('margin-left', '-'+100+'%');
	});
	slider9Promociones.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider9-promociones .slider__section9-promociones:last').insertBefore('#slider9-promociones .slider__section9-promociones:first');
		slider9Promociones.css('margin-left', '-'+100+'%');
	});
}

function autoplayPromociones() {
	intervalPromociones = setInterval(function(){
		moverDerechaPromociones();
	}, 7000);
}

siguientePromociones.on('click',function() {
	moverDerechaPromociones();
	clearInterval(intervalPromociones);
	autoplayPromociones();
});

anteriorPromociones.on('click',function() {
	moverIzquierdaPromociones();
	clearInterval(intervalPromociones);
	autoplayPromociones();
});

autoplayPromociones();