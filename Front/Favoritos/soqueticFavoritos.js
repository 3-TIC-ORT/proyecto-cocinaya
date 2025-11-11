connect2Server();

const contenedor = document.getElementById("listaFavoritos");

function cargarFavoritos() {
  getEvent("favoritos", (lista) => {
    contenedor.innerHTML = "";

    if (!lista || lista.length === 0) {
      contenedor.innerHTML = "<p>No tenés recetas favoritas.</p>";
      return;
    }

    lista.forEach((fav) => {
      // Si no tiene ingredientes, evitamos el error del .map
      const ingredientes = fav.ingredientes
        ? fav.ingredientes.map(i => i.tipo || i).join(", ")
        : "No especificados";

      const procedimiento = fav.procedimiento || "Sin procedimiento";

      const card = document.createElement("div");
      card.className = "cardFav";
      card.innerHTML = `
        <h3>${fav.nombre}</h3>
        <img src="${fav.imagen}" alt="${fav.nombre}" style="width:200px;border-radius:10px;">
        <p><strong>Ingredientes:</strong> ${ingredientes}</p>
        <p><strong>Procedimiento:</strong> ${procedimiento}</p>
        <hr>
      `;
      contenedor.appendChild(card);
    });
  });
}


cargarFavoritos();


onEvent("actualizarFavoritos", () => {
  cargarFavoritos();
});
