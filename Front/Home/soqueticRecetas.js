connect2Server(3000);

if(localStorage.getItem("usuario")==""){
alert("Tenes que loguearte");
window.location.href = "../Inicio/";
}
  

const contenedor = document.getElementById("recetas-container");
const buscador = document.getElementById("buscador");
const btnBuscar = document.getElementById("btnBuscar");
let todasLasRecetas = [];


getEvent("leerrecetas", (recetas) => {
  todasLasRecetas = recetas;
  //console.log("Comidas:")
  //console.log(recetas)
  mostrarRecetas(recetas);
});

function mostrarRecetas(recetas) {
  contenedor.innerHTML = ""; 

  //console.log("Comidas a mostrar:")
  //console.log(recetas)

  const recetasLimitadas = recetas.slice(0, 4);

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
        alert(` "${receta.nombre}" agregado a Favoritos`);
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

  //console.log("Comidas Filtradas: ")
  //console.log(filtradas)

  mostrarRecetas(filtradas);
}

// --- Buscar al hacer click ---
btnBuscar.addEventListener("click", filtrarRecetas);

// --- Buscar al presionar Enter ---
buscador.addEventListener("keydown", (e) => {
  if (e.key === "Enter") filtrarRecetas();
});

const cerrarSesion = document.getElementById("cerrarSesion");

  cerrarSesion.addEventListener("click", () => {
    localStorage.setItem("usuario","");
  });
