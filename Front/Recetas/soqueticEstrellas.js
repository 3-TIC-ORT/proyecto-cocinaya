connect2Server();

const estrellas = document.querySelectorAll(".estrellas span");
const comentarioInput = document.getElementById("comentarioInput");


let usuario = window.usuarioLogueado || "usuarioDemo";
let receta = window.recetaActual || "nombreDeReceta";

estrellas.forEach((estrella) => {
  estrella.addEventListener("click", () => {

    const cantidadEstrellas = estrella.getAttribute("data-value");


    estrellas.forEach(s => s.classList.remove("active"));
    for (let i = 0; i < cantidadEstrellas; i++) {
      estrellas[i].classList.add("active");
    }

    //  Leer comentario (si escribió)
    let comentario = comentarioInput ? comentarioInput.value : "";

    //  Datos que pide el back
    const datos = {
      usuario: usuario,
      receta: receta,
      cantidadEstrellas: Number(cantidadEstrellas),
      comentario: comentario
    };

    console.log("Mandando al BACK:", datos);

 
    postEvent("agregarValoracion", datos, (respuesta) => {
      console.log("Respuesta BACK:", respuesta);

      if (respuesta === false) {
        alert(" Ya valoraste esta receta");
      } else {
        alert(" Calificación guardada");
      }
    });
  });
});
