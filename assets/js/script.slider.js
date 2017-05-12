
// ---------------------------------------------------------------


var indiceSlide = 1;
console.log('indiceSlide inicial: '+indiceSlide);

$("#slider div").click(function(){
	//Esta parte es para la parte superior del slider 
	var nombreClase = $('#imagen1_slider').attr('class');
	indiceSlide = parseInt(nombreClase.toString().substring(nombreClase.length-1,nombreClase.length));
	console.log('clase: '+nombreClase);

	if ($(this).hasClass('flecha_izquierda')){
		console.log("Se hizo con el boton izquierdo");
		console.log('clase: '+nombreClase);
		var indiceIzquierda = nombreClase.substring(nombreClase.length-1, nombreClase.length);
		indiceIzquierdaFinal = ++indiceIzquierda;
		if (indiceIzquierdaFinal==5) {
			indiceIzquierdaFinal = 1;
		}
		console.log('EL indiceIzquierdaFinal es: '+indiceIzquierdaFinal);
		// $("#descripcion"+indiceIzquierdaFinal).css("width", "100%");
		// $("#descripcion"+indiceIzquierdaFinal).fadeIn(1000);

		$("#descripcion"+indiceIzquierdaFinal).fadeIn( 1000, function() {
		    // $( this )
		    //   	.css( "border", "2px red inset" )
		    //   	.filter( ".middle" )
		    //     .css( "background", "yellow" )
		    //     .focus();
		    // $( "div" ).css( "visibility", "hidden" );
		    $(".imagen1").css('opacity','1');
		});
		
		$("#descripcion div").not("#descripcion"+indiceIzquierdaFinal).fadeOut(20);
	}
	if ($(this).hasClass('flecha_derecha')){
		console.log("Se hizo con el boton derecho");
		console.log('clase: '+nombreClase);
		var indiceDerecha = nombreClase.substring(nombreClase.length-1, nombreClase.length);
		var indiceDerechaFinal = --indiceDerecha;
		if (indiceDerechaFinal == 0) {
			indiceDerechaFinal = 4;
		}
		console.log('Indice derecha: '+(indiceDerechaFinal));
		$("#descripcion"+indiceDerechaFinal).css("width", "100%");
		$("#descripcion"+indiceDerechaFinal).fadeIn(1000);
		
		$("#descripcion div").not("#descripcion"+indiceDerechaFinal).css("display", "none");
	}
	
	var indice = $('#imagen1_slider').attr('class');

    if ($(this).hasClass('flecha_izquierda')){

    	var indice_aux1 = indice.toString().substring(indice.length-1,indice.length);

    	if (indice_aux1==4) {
    		indice_aux1 = 0;
    	}
    	if(indice_aux1!=3){

    		$('#imagen1_slider').removeClass();
    		$('#imagen1_slider').addClass('imagen'+(++indice_aux1));
    		$('#panel_imagen').removeClass();
    		$('#panel_imagen').addClass('imagen'+(indice_aux1));
    		$('#imagen2_slider').removeClass();
    		$('#imagen2_slider').addClass('imagen'+(++indice_aux1));
    	}else{
    		$('#imagen1_slider').removeClass();
    		$('#imagen1_slider').addClass('imagen'+(++indice_aux1));
    		$('#panel_imagen').removeClass();
    		$('#panel_imagen').addClass('imagen'+(indice_aux1));
    		$('#imagen2_slider').removeClass();
    		$('#imagen2_slider').addClass('imagen1');
    		indice_aux1 = 1;
    	}
    	
    }else if ($(this).hasClass('flecha_derecha')){
    	
    	var indice_aux2 = indice.toString().substring(indice.length-1,indice.length);

    	if (indice_aux2==1) {
    		$('#imagen1_slider').removeClass();
			$('#imagen1_slider').addClass('imagen4');
			$('#panel_imagen').removeClass();
    		$('#panel_imagen').addClass('imagen4');	
			$('#imagen2_slider').removeClass();
			$('#imagen2_slider').addClass('imagen'+(indice_aux2));	
    	}
    	if (indice_aux2!=1) {
    		$('#imagen1_slider').removeClass();
			$('#imagen1_slider').addClass('imagen'+(--indice_aux2));
			$('#panel_imagen').removeClass();
			$('#panel_imagen').addClass('imagen'+(indice_aux2));
			$('#imagen2_slider').removeClass();
			$('#imagen2_slider').addClass('imagen'+(++indice_aux2));		
    	}
    }
});
// -------------------------------------------------------------------------
function inicializarSlider(){
	console.log(condicion());
	setInterval(condicion, 1000);
	if (condicion()) {
		continuarSlider();
	}
}

function condicion(){
	return false;
}

function prueba(){
	// condicion(false);
}

function continuarSlider() {
    setInterval(activarSlider, 3000);
}

var i = 0;
function activarSlider() {
  	var indice = $('#imagen1_slider').attr('class');
  	var indice_aux1 = indice.toString().substring(indice.length-1,indice.length);

	if (indice_aux1==4) {
		indice_aux1 = 0;
	}
	if(indice_aux1!=3){

		$('#imagen1_slider').removeClass();
		$('#imagen1_slider').addClass('imagen'+(++indice_aux1));
		$('#panel_imagen').removeClass();
		$('#panel_imagen').addClass('imagen'+(indice_aux1));
		$('#imagen2_slider').removeClass();
		$('#imagen2_slider').addClass('imagen'+(++indice_aux1));
	}else{
		$('#imagen1_slider').removeClass();
		$('#imagen1_slider').addClass('imagen'+(++indice_aux1));
		$('#panel_imagen').removeClass();
		$('#panel_imagen').addClass('imagen'+(indice_aux1));
		$('#imagen2_slider').removeClass();
		$('#imagen2_slider').addClass('imagen1');
		indice_aux1 = 1;
	}
}