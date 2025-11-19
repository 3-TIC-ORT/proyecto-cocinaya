connect2Server();

const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const boton = document.getElementById("boton");

  boton.addEventListener("click", () => {
    const usuarioFinal = usuario.value;
    const contraseñaFinal = contraseña.value;

    postEvent("iniciodesesion", { user: usuarioFinal, contraseña: contraseñaFinal }, (respuesta) => {
      console.log("Respuesta del backend:", respuesta);
      
      if (respuesta === "OK") {
        localStorage.setItem("usuario", usuarioFinal);
        window.location.href = "../Home/"; 
        
      } else {
        window.location.href = "../login/";
      }
    });
  });
