connect2Server(3000);

const contenedor = document.getElementById("recetas-container");


getEvent("leerrecetas", (recetas) => {
  mostrarRecetas(recetas);
});

function mostrarRecetas(recetas) {
  contenedor.innerHTML = ""; 


  const recetasLimitadas = recetas.slice(4, 8);

  recetasLimitadas.forEach((receta) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-receta");

    tarjeta.innerHTML = `
      <div class="imagen-container">
        <img src="${receta.imagen}" alt="${receta.nombre}" class="imagen-receta">
        <span class="estrella-fav">⭐</span>
      </div>
      <h3 class="nombre-receta">${receta.nombre}</h3>
    `;


    tarjeta.addEventListener("click", () => {
      // Guardamos el nombre o ID de la receta en localStorage para mostrar luego el detalle
      localStorage.setItem("recetaSeleccionada", JSON.stringify(receta));
      window.location.href = "../Recetas/";
    });

    // Evento para añadir a favoritos (click solo en la estrella)
    const estrella = tarjeta.querySelector(".estrella-fav");
    estrella.addEventListener("click", (event) => {
      event.stopPropagation(); // Evita que dispare el click de la tarjeta
    

           postEvent("agregarFavorito", { receta }, () => {
        alert("✅ Receta agregada a Favoritos");
         emitEvent("actualizarFavoritos");
      });
    });
    
    contenedor.appendChild(tarjeta);
  });
}
