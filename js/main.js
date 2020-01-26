//onst contenedor = document.getElementById("contenedor") ;
const contenedor = $('#contenedor');
$(document).ready(function () {

    $('#boton-menu').on('click', function(){
        $('#contenedor').toggleClass('active');//quitar y poner la clase naranja
    });
});

const comprobarAncho = function(){
	if(window.innerWidth <= 768){
		$('#contenedor').removeClass('active');
	}else{
		$('#contenedor').addClass('active');
	}
};
comprobarAncho();
window.addEventListener('resize', function(){
	comprobarAncho();
});