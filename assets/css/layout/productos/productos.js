$(".prueba:nth-child(3)").css("marginTop",10+"px");
$('#detalle1, #detalle2, #detalle3').on('click', function(){
	$('.productos').css('display','none');
	$('#contenido-detalle').fadeIn(5000);

	$('.contenido-texto-detalle section:nth-child(2)').css('display','none');
	$('.contenido-texto-detalle section:nth-child(3)').css('display','none');

})

$(".accordion-toggle:nth-child(1)").on("click", function(){

	$("#categoria-navegador").text($(this).attr("title"));
	$('#contenido-detalle').css('display','none');
	$('.productos').fadeIn(1000);

	// que va pasar cuando haga click en acordion-togle????? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	$(".contenido-texto-detalle section:nth-child(1)").css('display','block');

	var categoria = $("#categoria-navegador").text($(this).attr("title"));

	switch(categoria.text()){
		case 'postres':

			$("#subcategoria-navegador").text('DETALLE-POSTRE1');

			$('#imagen1').removeClass('pastel1 harinas1 insumos1').addClass('postre1');
			$('#imagen2').removeClass('pastel2 harinas2 insumos2').addClass('postre2');
			$('#imagen3').removeClass('pastel3 harinas3 insumos3').addClass('postre3');

			$('#detalle1').removeClass('detalle-pastel1 detalle-harinas1 detalle-insumos1').addClass('detalle-postre1');;
			$('#detalle2').removeClass('detalle-pastel2 detalle-harinas2 detalle-insumos2').addClass('detalle-postre2');
			$('#detalle3').removeClass('detalle-pastel3 detalle-harinas3 detalle-insumos3').addClass('detalle-postre3');
			break;

		case 'pastelería':
			$("#subcategoria-navegador").text('DETALLE-PASTEL1');

			$('#imagen1').removeClass('postre1 harinas1 insumos1').addClass('pastel1');
			$('#imagen2').removeClass('postre2 harinas2 insumos2').addClass('pastel2');
			$('#imagen3').removeClass('postre3 harinas3 insumos3').addClass('pastel3');

			$('#detalle1').removeClass('detalle-postre1 detalle-harinas1 detalle-insumos1').addClass('detalle-pastel1');
			$('#detalle2').removeClass('detalle-postre2 detalle-harinas2 detalle-insumos2').addClass('detalle-pastel2');
			$('#detalle3').removeClass('detalle-postre3 detalle-harinas3 detalle-insumos3').addClass('detalle-pastel3');
			break;

		case 'harinas':
			$("#subcategoria-navegador").text('DETALLE-HARINAS1');

			$('#imagen1').removeClass('postre1 pastel1 insumos1').addClass('harinas1');
			$('#imagen2').removeClass('postre2 pastel2 insumos2').addClass('harinas2');
			$('#imagen3').removeClass('postre3 pastel3 insumos3').addClass('harinas3');

			$('#detalle1').removeClass('detalle-pastel1 detalle-postre1 detalle-insumos1').addClass('detalle-harinas1');
			$('#detalle2').removeClass('detalle-pastel2 detalle-postre2 detalle-insumos2').addClass('detalle-harinas2');
			$('#detalle3').removeClass('detalle-pastel3 detalle-postre3 detalle-insumos3').addClass('detalle-harinas3');
			break;

		case 'insumos químicos':
			$("#subcategoria-navegador").text('DETALLE-INSUMOS1');

			$('#imagen1').removeClass('postre1 pastel1 harinas1').addClass('insumos1');
			$('#imagen2').removeClass('postre2 pastel2 harinas2').addClass('insumos2');
			$('#imagen3').removeClass('postre3 pastel3 harinas3').addClass('insumos3');

			$('#detalle1').removeClass('detalle-pastel1 detalle-harinas1 detalle-postre1').addClass('detalle-insumos1');
			$('#detalle2').removeClass('detalle-pastel2 detalle-harinas2 detalle-postre2').addClass('detalle-insumos2');
			$('#detalle3').removeClass('detalle-pastel3 detalle-harinas3 detalle-postre3').addClass('detalle-insumos3');
			break;
	}
})

$('#detalle1').on('click', function(){

	switch($(this).attr('class')){
		case 'detalle-postre1':
			$("#subcategoria-navegador").text($(this).attr("class"));
			$('#contenido-detalle div').not('#contenido-detalle-postre1').css("display", "none");
			$('#contenido-detalle-postre1').fadeIn(2000);
			break;
		case 'detalle-pastel1':
			$("#subcategoria-navegador").text($(this).attr("class"));
			$('#contenido-detalle div').not('#contenido-detalle-pastel1').css("display", "none");
			$('#contenido-detalle-pastel1').fadeIn(2000);
			break;
		case 'detalle-harinas1':
			$("#subcategoria-navegador").text($(this).attr("class"));
			$('#contenido-detalle div').not('#contenido-detalle-harinas1').css("display", "none");
	    	$('#contenido-detalle-harinas1').fadeIn(2000); 
	    	break;
    	case 'detalle-insumos1':
    		$("#subcategoria-navegador").text($(this).attr("class"));
    		$('#contenido-detalle div').not('#contenido-detalle-insumos1').css("display", "none");
	    	$('#contenido-detalle-insumos1').fadeIn(2000);
	    	break;
	}
})

$('#detalle2').on('click', function(){
	
	switch($(this).attr('class')){
		case 'detalle-postre2':
			$("#subcategoria-navegador").text($(this).attr("class"));
			$('#contenido-detalle div').not('#contenido-detalle-postre2').css("display", "none");
			$('#contenido-detalle-postre2').fadeIn(2000);
			break;
		case 'detalle-pastel2':
			$("#subcategoria-navegador").text($(this).attr("class"));
			$('#contenido-detalle div').not('#contenido-detalle-pastel2').css("display", "none");
			$('#contenido-detalle-pastel2').fadeIn(2000);
			break;
		case 'detalle-harinas2':
			$("#subcategoria-navegador").text($(this).attr("class"));
			$('#contenido-detalle div').not('#contenido-detalle-harinas2').css("display", "none");
	    	$('#contenido-detalle-harinas2').fadeIn(2000); 
	    	break;
    	case 'detalle-insumos2':
    		$("#subcategoria-navegador").text($(this).attr("class"));
    		$('#contenido-detalle div').not('#contenido-detalle-insumos2').css("display", "none");
	    	$('#contenido-detalle-insumos2').fadeIn(2000);
	    	break;
	}
})

$('#detalle3').on('click', function(){
	
	switch($(this).attr('class')){
		case 'detalle-postre3':
			$("#subcategoria-navegador").text($(this).attr("class"));
			$('#contenido-detalle div').not('#contenido-detalle-postre3').css("display", "none");
			$('#contenido-detalle-postre3').fadeIn(2000);
			break;
		case 'detalle-pastel3':
			$("#subcategoria-navegador").text($(this).attr("class"));
			$('#contenido-detalle div').not('#contenido-detalle-pastel3').css("display", "none");
			$('#contenido-detalle-pastel3').fadeIn(2000);
			break;
		case 'detalle-harinas3':
			$("#subcategoria-navegador").text($(this).attr("class"));
			$('#contenido-detalle div').not('#contenido-detalle-harinas3').css("display", "none");
	    	$('#contenido-detalle-harinas3').fadeIn(2000); 
	    	break;
    	case 'detalle-insumos3':
    		$("#subcategoria-navegador").text($(this).attr("class"));
    		$('#contenido-detalle div').not('#contenido-detalle-insumos3').css("display", "none");
	    	$('#contenido-detalle-insumos3').fadeIn(2000);
	    	break;
	}
})
$("#contenido-detalle > #contenido-detalle-postre1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-postre1').css('display','none');
	$('.contenido-texto-detalle .ingredientes-postre1').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-postre1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-postre1').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-postre1').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-postre1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-postre1').css('display','none');
	$('.contenido-texto-detalle .consejo-postre1').css('display','block');
})

// -------------------------
$("#contenido-detalle > #contenido-detalle-postre2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-postre2').css('display','none');
	$('.contenido-texto-detalle .ingredientes-postre2').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-postre2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-postre2').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-postre2').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-postre2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-postre2').css('display','none');
	$('.contenido-texto-detalle .consejo-postre2').css('display','block');
})
// ----------------------------------
$("#contenido-detalle > #contenido-detalle-postre3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-postre3').css('display','none');
	$('.contenido-texto-detalle .ingredientes-postre3').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-postre3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-postre3').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-postre3').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-postre3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-postre3').css('display','none');
	$('.contenido-texto-detalle .consejo-postre3').css('display','block');
})

// -------------------------------------------------------------------------------------------------------------------------------------------------
$("#contenido-detalle > #contenido-detalle-pastel1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-pastel1').css('display','none');
	$('.contenido-texto-detalle .ingredientes-pastel1').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-pastel1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-pastel1').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-pastel1').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-pastel1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-pastel1').css('display','none');
	$('.contenido-texto-detalle .consejo-pastel1').css('display','block');
})

// -------------------------
$("#contenido-detalle > #contenido-detalle-pastel2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-pastel2').css('display','none');
	$('.contenido-texto-detalle .ingredientes-pastel2').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-pastel2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-pastel2').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-pastel2').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-pastel2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-pastel2').css('display','none');
	$('.contenido-texto-detalle .consejo-pastel2').css('display','block');
})
// ----------------------------------
$("#contenido-detalle > #contenido-detalle-pastel3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-pastel3').css('display','none');
	$('.contenido-texto-detalle .ingredientes-pastel3').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-pastel3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-pastel3').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-pastel3').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-pastel3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-pastel3').css('display','none');
	$('.contenido-texto-detalle .consejo-pastel3').css('display','block');
})
// -------------------------------------------------------------------------------------------------------------------------------------------------
$("#contenido-detalle > #contenido-detalle-harinas1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-harinas1').css('display','none');
	$('.contenido-texto-detalle .ingredientes-harinas1').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-harinas1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-harinas1').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-harinas1').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-harinas1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-harinas1').css('display','none');
	$('.contenido-texto-detalle .consejo-harinas1').css('display','block');
})

// -------------------------
$("#contenido-detalle > #contenido-detalle-harinas2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-harinas2').css('display','none');
	$('.contenido-texto-detalle .ingredientes-harinas2').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-harinas2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-harinas2').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-harinas2').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-harinas2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-harinas2').css('display','none');
	$('.contenido-texto-detalle .consejo-harinas2').css('display','block');
})
// ----------------------------------
$("#contenido-detalle > #contenido-detalle-harinas3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-harinas3').css('display','none');
	$('.contenido-texto-detalle .ingredientes-harinas3').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-harinas3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-harinas3').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-harinas3').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-harinas3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-harinas3').css('display','none');
	$('.contenido-texto-detalle .consejo-harinas3').css('display','block');
})
// ----------------------------------------------------------------------------------------------------------------------------------------------
$("#contenido-detalle > #contenido-detalle-insumos1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-insumos1').css('display','none');
	$('.contenido-texto-detalle .ingredientes-insumos1').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-insumos1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-insumos1').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-insumos1').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-insumos1 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-insumos1').css('display','none');
	$('.contenido-texto-detalle .consejo-insumos1').css('display','block');
})

// -------------------------
$("#contenido-detalle > #contenido-detalle-insumos2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-insumos2').css('display','none');
	$('.contenido-texto-detalle .ingredientes-insumos2').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-insumos2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-insumos2').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-insumos2').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-insumos2 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-insumos2').css('display','none');
	$('.contenido-texto-detalle .consejo-insumos2').css('display','block');
})
// ----------------------------------
$("#contenido-detalle > #contenido-detalle-insumos3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(1)").on("click", function(){
	$('.contenido-texto-detalle section').not('.ingredientes-insumos3').css('display','none');
	$('.contenido-texto-detalle .ingredientes-insumos3').css('display','block');

})

$("#contenido-detalle > #contenido-detalle-insumos3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(2)").on("click", function(){
	$('.contenido-texto-detalle section').not('.modo-preparacion-insumos3').css('display','none');
	$('.contenido-texto-detalle .modo-preparacion-insumos3').css('display','block');
})

$("#contenido-detalle > #contenido-detalle-insumos3 > .texto-detalle > .titulo-texto-detalle > span:nth-child(3)").on("click", function(){
	$('.contenido-texto-detalle section').not('.consejo-insumos3').css('display','none');
	$('.contenido-texto-detalle .consejo-insumos3').css('display','block');
})
// 221 lineas de codigo