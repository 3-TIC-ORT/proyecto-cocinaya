connect2Server();

const contenedor = document.getElementById("listaFavoritos");


function cargarFavoritos() {
  getEvent("favoritos", (lista) => {
     contenedor.innerHTML = "";

      if (lista.length === 0) {
      contenedor.innerHTML = "<p>No tenés recetas favoritas </p>";
      return;
    }

    lista.forEach((fav) => {
      const card = document.createElement("div");
      card.className = "cardFav";
      card.innerHTML = `
        <h3>${fav.nombre}</h3>
        <p><strong>Ingredientes:</strong> ${fav.ingredientes.map(i => i.tipo).join(", ")}</p>
        <p><strong>Procedimiento:</strong> ${fav.procedimiento}</p>
        <hr>
      `;
      contenedor.appendChild(card);
    });
  });
}
    

getEvent("leerrecetas", (recetas) => {
  if (!localStorage.getItem("favoritosIniciales")) {
    const recetasPorDefecto = recetas.slice(0, 2);
    recetasPorDefecto.forEach((receta) => {
      postEvent("agregarFavorito", { receta });
    });
    localStorage.setItem("favoritosIniciales", "true");
  }
});



cargarFavoritos();
