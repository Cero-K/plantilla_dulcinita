<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Dulcinita</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/estilo.css">
	<link href="https://file.myfontastic.com/963NiJbmGtpcq8ciwUZ7ZK/icons.css" rel="stylesheet">
  	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    

</head>
<body>
<nav class="navbar navbar-default" id="nav-general">
  <div class="container-fluid" >
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#" id="i1">
      	<!--brand en pantalla pequeña -->
      	<img src="assets/images/dulcinita.png" alt=""  style="margin-top: -35px; margin-left: -35px;">
      </a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
      	<li>
      		<a class="navbar-brand" href="#" id="i11">
      		<!--brand en pantalla grande -->
				<img src="assets/images/dulcinita.png" alt="" style="margin-top: -35px">
      		<span class="sr-only">(current)</span>
      		</a>
  		</li>
        <li><a href="#" id="i2">CONÓCENOS<span class="sr-only">(current)</span></a></li>
        <li><a href="#" id="i21">o</a></li>
        <li><a href="#" id="i3">PRODUCTOS</a></li>
        <li><a href="#" id="i31">o</a></li>
        <li><a href="#" id="i4">TIPS</a></li>
        <li><a href="#" id="i41">o</a></li>
        <li><a href="#" id="i5">PROMOCIONES</a></li>
        <li><a href="#" id="i51">o</a></li>
        <li><a href="#" id="i6">CAPACITACIÓN</a></li>
        <li><a href="#" id="i61">o</a></li>
        <li><a href="#" id="i7">CONTACTO</a></li>
        <li>
        	<div id="social-media">
        		<div id="facebook" >
        			<a href=""><p class="icon-facebook" style="margin-top: 15px"></p></a>
        		</div>
        		
        		<div id="twitter">
        			<a href=""><p class="icon-twitter" style="margin-top: 15px"></p></a>
        		</div>
        		
        		<div id="youtube">
        			<a href=""><p class="icon-youtube" style="margin-top: 15px"></p></a>
        		</div>
        	</div>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<div id="imagen" style="margin-top: -20px">
	<img src="assets/images/home.jpg" alt="" style="width: 100%; height: 450px">
</div>
<div id="texto_debajoImagen">
	<div id="texto_debajoImagen1">
		<img src="assets/images/imagen1.png" alt="" style="width: 75%; height: 55%">
	</div>
	<div id="texto_debajoImagen2">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, delectus modi dolorum nostrum illo magnam error commodi consectetur recusandae. Eaque quis sunt officiis nihil debitis consequatur atque nam ex voluptate.
	</div>
</div>
<div id="productos">
  <p id="parrafo1">PRODUCTOS DULCINITA</p>
  <p id="parrafo2">Lorem ipsum dolor sit amet, consectetur .</p>
  <div id="imagen1_productos">
    IMAGEN
  </div>
  <p id="parrafo3">Productos Dulcinita es una empresa con más de 20 años de creación fabricando productos gelatina para la industria de planificación, respostería y postres para el mercado</p>
  <div id="imgenes_productos" class="container">
    <div class="row">
      <div class=".col-lg-6 col-md-6 col-sm-12 col-xs-12 imagenProductos" id="imagenProducto1">
        <img src="assets/images/imagen2.jpg" alt="" class="img">
        <div class="efecto"></div>
        <div class="boton" id="boton1"><a href="" class="detalle">Ver Detalle</a></div>
      </div>
      <div class=".col-lg-6 col-md-6 col-sm-12 col-xs-12 imagenProductos" id="imagenProducto2">
        <img src="assets/images/imagen2.jpg" alt="" class="img">
        <div class="efecto"></div>
        <div class="boton" id="boton2"><a href="" class="detalle">Ver Detalle</a></div>
      </div>

      <!-- Add the extra clearfix for only the required viewport -->
      <div class="clearfix hidden-sm-up"></div>

      <div class=".col-lg-6 col-md-6 col-sm-12 col-xs-12 imagenProductos" id="imagenProducto3">
        <img src="assets/images/imagen2.jpg" alt="" class="img">
        <div class="efecto"></div>
        <div class="boton" id="boton3"><a href="" class="detalle">Ver Detalle</a></div>
      </div>
      <div class=".col-lg-6 col-md-6 col-sm-12 col-xs-12 imagenProductos" id="imagenProducto4">
        <img src="assets/images/imagen2.jpg" alt="" class="img">
        <div class="efecto"></div>
        <div class="boton" id="boton4"><a href="" class="detalle">Ver Detalle</a></div>
      </div>
    </div>
  </div>
</div>

<div id="nuestrasMarcas">
  <p id="nuestrasMarcas_parrafo1">NUESTRAS MARCAS.</p>
  <p id="nuestrasMarcas_parrafo2">Lorem ipsum dolor sit amet </p>
  <div id="imagen_nuestrasMarcas">
    IMAGEN
  </div>
  <p>Somos una empresa dedicada a la producción y distribución de abarrotes, pioneros e productos de repostería; siendo nuestra mayor preocupación la salud de nuestros consumidores así como la contribución a la calidad de cada insumo</p>
</div>

</body>
</html>
<script>
$("#imagenProducto1").mouseenter(function(evento){
   $("#boton1").css("color", "white");
   $("#boton1").css("opacity", "1");
});
$("#boton1").mouseenter(function(e){
   $("#boton1").css("opacity", "1");
});
$("#imagenProducto1").mouseleave(function(e){
   $("#boton1").css("opacity", "0");
});

$("#imagenProducto2").mouseenter(function(evento){
   $("#boton2").css("color", "white");
   $("#boton2").css("opacity", "1");
});
$("#boton2").mouseenter(function(e){
   $("#boton2").css("opacity", "1");
});
$("#imagenProducto2").mouseleave(function(e){
   $("#boton2").css("opacity", "0");
});

$("#imagenProducto3").mouseenter(function(evento){
   $("#boton3").css("color", "white");
   $("#boton3").css("opacity", "1");
});
$("#boton3").mouseenter(function(e){
   $("#boton3").css("opacity", "1");
});
$("#imagenProducto3").mouseleave(function(e){
   $("#boton3").css("opacity", "0");
});

$("#imagenProducto4").mouseenter(function(evento){
   $("#boton4").css("color", "white");
   $("#boton4").css("opacity", "1");
});
$("#boton4").mouseenter(function(e){
   $("#boton4").css("opacity", "1");
});
$("#imagenProducto4").mouseleave(function(e){
   $("#boton4").css("opacity", "0");
})

</script>
<!-- /.EL EXCESO DE PESTAÑAS HACE QUE NO SE VEA BIEN EL ESTILO RESPONSIVO -->