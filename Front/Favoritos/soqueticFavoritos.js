connect2Server();

const usuario = localStorage.getItem("usuario");

if(localStorage.getItem("usuario")==""){
alert("Tenes que loguearte");
window.location.href = "../Inicio/";
}

const contenedor = document.getElementById("listaFavoritos");

function cargarFavoritos() {

 let todosFavoritos = JSON.parse(localStorage.getItem("favoritosGuardados")) || [];
  
let favoritosDelUsuario = todosFavoritos.filter(fav => fav.usuario === usuario);
  
contenedor.innerHTML = "";

    if (favoritosDelUsuario.length === 0) {
      contenedor.innerHTML = "<p>No tenés recetas favoritas.</p>";
      return;
    }

    favoritosDelUsuario.forEach((fav) => {
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
         <img src="../imagenes/estrella.png" alt="Favorito" class="estrella-fav-icono">
      `;
      contenedor.appendChild(card);
    });
  ;
}
cargarFavoritos();



