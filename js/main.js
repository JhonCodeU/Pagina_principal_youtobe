//onst contenedor = document.getElementById("contenedor") ;
const contenedor = $('#contenedor');
$(document).ready(function () {

    $('#boton-menu').on('click', function(){
        $('#contenedor').toggleClass('active');//quitar y poner la clase naranja
    });
});