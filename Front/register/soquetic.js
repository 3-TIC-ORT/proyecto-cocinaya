connect2Server();

const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const boton = document.getElementById("boton");


  boton.addEventListener("click", () => {
    const usuarioFinal = usuario.value;
    const contraseñaFinal = contraseña.value;

 
    postEvent("registro", { user: usuarioFinal, contraseña: contraseñaFinal }, (respuesta) => {
      console.log("Respuesta del backend:", respuesta);
      alert(respuesta);
      window.location.href = "../Home/";
      alert(respuesta);
      if (respuesta === "OK") {
        alert("Te has registrado correctamente");
        window.location.href = "../Home/"; 
      } else {
        window.location.href = "../register/";
      }
    });
  });



   

