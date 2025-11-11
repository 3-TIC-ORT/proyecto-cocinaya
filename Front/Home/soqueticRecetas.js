connect2Server(3000);

const contenedor = document.getElementById("recetas-container");
const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");
let todasLasRecetas = [];


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
    

     postEvent("agregarFavorito", receta, (respuesta) => {
        alert(`✅ "${receta.nombre}" agregado a Favoritos`);
        // redirigir a Favoritos para ver la receta agregada
        window.location.href = "../Favoritos/";
      });
    });
    
    contenedor.appendChild(tarjeta);
  });
}


function filtrarRecetas() {
  const texto = buscador.value.toLowerCase();

  const filtradas = todasLasRecetas.filter((receta) => {
    const nombreCoincide = receta.nombre.toLowerCase().includes(texto);
    const ingredienteCoincide = receta.ingredientes.some(i =>
      i.tipo.toLowerCase().includes(texto)
    );
    return nombreCoincide || ingredienteCoincide;
  });

  mostrarRecetas(filtradas);
}

// --- Buscar al hacer click ---
btnBuscar.addEventListener("click", filtrarRecetas);

// --- Buscar al presionar Enter ---
buscador.addEventListener("keydown", (e) => {
  if (e.key === "Enter") filtrarRecetas();
});