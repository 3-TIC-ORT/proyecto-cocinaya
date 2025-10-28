const estrellas = document.querySelectorAll(".estrellas span");


let usuario = "usuarioDemo"; 
let receta = "espaguetis"; 
let comentario = ""; // input

estrellas.forEach((estrella) => {
  estrella.addEventListener("click", () => {
    const cantidadEstrellas = estrella.getAttribute("data-value");

    
    estrellas.forEach(s => s.classList.remove("active"));
    estrella.classList.add("active");
    for (let i = 0; i < cantidadEstrellas; i++) {
      estrellas[i].classList.add("active");
    }

    
    const datos = {
      usuario: usuario,
      receta: receta,
      cantidadEstrellas: cantidadEstrellas,
      comentario: comentario
    };

    console.log("Datos enviados:", datos);

    
    postEvent("calificacion", datos, function(respuesta) {
      console.log("Respuesta del backend:", respuesta);
      alert("Tu calificación fue enviada con éxito!");
    });
  });
});

connect2Server();
