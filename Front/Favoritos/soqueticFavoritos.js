connect2Server();


const botonFav = document.getElementById("btnFavorito");

if (botonFav) {
  botonFav.addEventListener("click", () => {
    
    
    const receta = {
      nombre: document.getElementById("tituloReceta").textContent,
      ingredientes: window.ingredientesReceta,  
      pasos: window.pasosReceta
    };

    postEvent("agregarFavorito", receta, (respuesta) => {
      console.log("Guardado:", respuesta);
      alert("Receta agregada a Favoritos ");
    });
  });
}

// CARGAR LISTA DE FAVORITOS EN LA PÁGINA FAVORITOS
function cargarFavoritos() {
  getEvent("favoritos", (lista) => {
    console.log("Favoritos:", lista);

    const contenedor = document.getElementById("listaFavoritos");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    lista.forEach((fav) => {
      const card = document.createElement("div");
      card.className = "cardFav";
      card.innerHTML = `
        <h3>${fav.nombre}</h3>
        <p><strong>Ingredientes:</strong> ${fav.ingredientes.join(", ")}</p>
        <p><strong>Pasos:</strong> ${fav.pasos.join(" → ")}</p>
        <hr>
      `;
      contenedor.appendChild(card);
    });
  });
}


if (window.location.pathname.includes("favoritos")) {
  cargarFavoritos();
}
