connect2Server();

const receta = JSON.parse(localStorage.getItem("recetaSeleccionada"));
const cont = document.querySelector(".contenido");

if (receta && cont) {
  const infoHTML = `

  <div class="receta">
  <div class="imagen">
  <img src="${receta.imagen}" alt="${receta.nombre}" style="width:300px;border-radius:10px;">
  </div>
  
  <div class="detalles">
    <h2 id="nombre">${receta.nombre}</h2>
    
    <h4>Ingredientes</h4>
    <ul id="ingredientes">
      ${receta.ingredientes.map(i => `<li>${i.cantidad} ${i.tipo}</li>`).join("")}
    </ul>
    <h4>Procedimiento</h4>
<ol id="procedimiento">
  ${receta.procedimiento
    .split(/\d+\.\s*/)  
    .filter(p => p.trim() !== "")
    .map(p => `<li>${p.trim()}</li>`)
    .join("")}
</ol>
    </div>
    
    <br>
    <button id="btnFav"><img src="../imagenes/estrella.png" alt="estrella" style="width:30px;"></button>
    
  `;
  cont.insertAdjacentHTML("beforeend", infoHTML);

  // ---- FAVORITOS ----
  document.getElementById("btnFav").addEventListener("click", () => {
    postEvent("agregarFavorito", receta, () => {
      alert(`✅ "${receta.nombre}" agregado a Favoritos`);
      window.location.href = "../Favoritos/";
    });
  });

  // VALORACIONES
  const estrellas = document.querySelectorAll(".estrellas span");
  const comentariosDiv = document.querySelector(".comentarios");


  estrellas.forEach((estrella) => {
    estrella.addEventListener("click", () => {
      const valor = parseInt(estrella.getAttribute("data-value"));

      // estrellas
      estrellas.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < valor; i++) estrellas[i].classList.add("active");

      //  texto del comentario
      const comentario = document.getElementById("comentario").value;

      const datos = {
        receta: receta.nombre,
        estrellas: valor,
        comentario: comentario
      };

      const nuevo = document.createElement("div");
      nuevo.classList.add("comentario-item");
      nuevo.innerHTML = `
        <p>⭐ ${"★".repeat(valor)} (${valor}/5)</p>
        <p>${comentario}</p>
        <hr>
      `;
      comentariosDiv.appendChild(nuevo);

      postEvent("agregarValoracion", datos, () => {
        alert("⭐ Valoración guardada correctamente");
      });
      document.getElementById("comentario").value = "";
    });
  });
}


