let usuario = document.getElementById ("usuario")
let contraseña = document.getElementById ("contraseña")
let boton = document.getElementById ("boton")

boton.addEventListener("click", function() {
    let contraseñafinal = contraseña.value
    let usuariofinal = usuario.value

postEvent("registro", {user: usuariofinal,contraseña: contraseñafinal}, function(respuesta) {
console.log("Respuesta del backend:", respuesta);
alert(respuesta);
});
});


connect2Server(3000);
