connect2Server();

// Ejemplo 
const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const boton = document.getElementById("boton");

if (boton) {
  boton.addEventListener("click", () => {
    const usuarioFinal = usuario.value;
    const contraseñaFinal = contraseña.value;

 
    postEvent("registro", { user: usuarioFinal, contraseña: contraseñaFinal }, (respuesta) => {
      console.log("Respuesta del backend:", respuesta);
      alert(respuesta);
    });
  });
}

<body> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.8.1/socket.io.js"></script>
<script src="https://cdn.jsdelivr.net/gh/JZylber/SoqueTIC-Client@v1.4.2/soquetic-client.js"></script>
<script src="../soquetic-front.js"></script>
</body>
   

