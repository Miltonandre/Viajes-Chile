$(document).ready(function() {
    $("#img1").hover(function() {
      // Ocultar el texto al entrar
    $("#texto1").hide();
    }, function() {
      // Mostrar el texto al salir
    $("#texto1").show();
    });
});