document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});
function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
      alert('Introduce tu nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if ( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
      alert('Introduce tu apellido');
      return;
    }
    
    var email= document.getElementById('correo').value;
    re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (!re.exec(email)) {
        alert('Introduce el correo o asegurate que esta correcto');
        return;
    }
    var telefono = document.getElementById('telefono').value;
    if( (/^\d{10}$/.test(telefono)) || telefono == null || telefono.length==0) { 
        alert("Introduce bien el telefono");
        return;
    }
    var numero, let, letra;
    var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
    var dni = document.getElementById('dni').value;
    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        let = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != let) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
            return;
        }
    }else{
        alert('Dni erroneo, formato no válido');
        return;
    }
    var usuario = document.getElementById('usuario').value;
    if( usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)) {
      alert('Introduce tu nombre de usuario');
      return;
    }
    var Fecha = document.getElementById('Fecha').value;
    if( Fecha == null ) {
      alert('Introduce tu Fecha de Nacimiento');
      return;
    }

    this.submit();
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
}

/*
var verificar = true;
    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var fomulario = document.getElementById("fomulario-js");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");


    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)){
        alert("El campo nombre es requerido");
        verificar=false;
    }
*/


