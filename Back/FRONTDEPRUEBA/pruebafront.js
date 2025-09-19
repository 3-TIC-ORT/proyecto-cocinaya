let usuario = document.getElementById ("usuario")
let usuariofinal = usuario.value
let contraseña = document.getElementById ("contraseña")
let contraseñafinal = contraseña.value
let boton = document.getElementById ("boton")


boton.addEventListener("click", function() {

postEvent("registro", usuariofinal, contraseñafinal, function(respuesta) {
console.log("Respuesta del backend:", respuesta);
alert(respuesta);
});
});