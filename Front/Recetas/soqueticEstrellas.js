connect2Server();

const usuario = localStorage.getItem("usuario");
if(usuario ==""){
alert("Tenes que loguearte");
window.location.href = "../Inicio/";
}

const receta = JSON.parse(localStorage.getItem("recetaSeleccionada").split('|')[0]);
const cont = document.querySelector(".contenido");
let puntuacion = "";

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
  


  estrellas.forEach((estrella) => {
    estrella.addEventListener("click", () => {
      const valor = parseInt(estrella.getAttribute("data-value"));
      puntuacion = valor;

      // estrellas
      estrellas.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < valor; i++) estrellas[i].classList.add("active");

      //  texto del comentario
      const comentario = document.getElementById("comentario").value; 

  

      

      
      
    });
  });
}

const btnEnviar = document.getElementById("btnEnviar").addEventListener("click", () => {
  const comentario = document.getElementById("comentario").value;
  const datos = {
    receta: receta.nombre,
    estrellas: puntuacion,
    comentario: comentario,
    usuario: usuario
  };
  postEvent("agregarValoracion", datos, () => {
        alert("⭐ Valoración guardada correctamente");
        const comentariosDiv = document.querySelector(".comentarios");
        const nuevo = document.createElement("div");
        nuevo.classList.add("comentario-item");
        nuevo.innerHTML = `
          <p>⭐ ${"★".repeat(puntuacion)} (${puntuacion}/5)</p>
          <p>${comentario}</p>
          <hr>
        `;
        comentariosDiv.appendChild(nuevo);
        document.getElementById("comentario").value = "";
      });
 });


