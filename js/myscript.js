var DNI_REGEX=/^(\D{8})([A-Z])$/;
if(DNI.match(DNI_REGEX)){
    console.log("DNI correcto");
}else{
    alert("DNI incorrecto");
}

valor = document.getElementById("telefono").value;if( !(/^\d{10}$/.test(valor)) ) { return false;}


