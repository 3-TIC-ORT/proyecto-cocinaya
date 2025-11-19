connect2Server();

const usuario = localStorage.getItem("usuario");
if(usuario ==""){
alert("Tenes que loguearte");
window.location.href = "../Inicio/";
}

const receta = JSON.parse(localStorage.getItem("recetaSeleccionada").split('|')[0]);
const recetaDiv = document.querySelector(".receta");
const cont = document.querySelector(".contenido");
const comentariosDiv = document.querySelector(".comentarios");
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
     <img src="../imagenes/estrella.png" alt="estrella" id="btnFav" style="width:30px;">
    
  `;
recetaDiv.innerHTML = infoHTML;

  // ---- FAVORITOS ----
  document.getElementById("btnFav").addEventListener("click", () => {
const favoritoConUsuario = {
      ...receta,
      usuario: usuario
    };

  let todosFavoritos = JSON.parse(localStorage.getItem("favoritosGuardados")) || [];
  todosFavoritos.push(favoritoConUsuario);
  localStorage.setItem("favoritosGuardados", JSON.stringify(todosFavoritos));

    postEvent("agregarFavorito", favoritoConUsuario, () => {
      window.location.href = "../Favoritos/";
    });
  });


  mostrarComentariosGuardados();
  
  // VALORACIONES
  const estrellas = document.querySelectorAll(".estrellas span");
  
  estrellas.forEach((estrella) => {
    estrella.addEventListener("click", () => {
      const valor = parseInt(estrella.getAttribute("data-value"));
      puntuacion = valor;

      // estrellas
      estrellas.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < valor; i++) estrellas[i].classList.add("active"); 
    });
  });
}

function mostrarComentariosGuardados() {

let todosLosComentarios = JSON.parse(localStorage.getItem("valoracionesGuardadas")) || [];
  
  // Filtrar solo los de ESTA receta
  let comentariosDeEstaReceta = todosLosComentarios.filter(v => v.receta === receta.nombre);
  
  // Limpiar el div
 comentariosDiv.querySelectorAll(".comentario-item").forEach(item => item.remove());
  
  // Si no hay comentarios
  if (comentariosDeEstaReceta.length === 0) {
    if (!comentariosDiv.querySelector(".sin-comentarios")) {
      const mensaje = document.createElement("p");
      mensaje.classList.add("sin-comentarios");
      comentariosDiv.appendChild(mensaje);
    }
    return;
  }


  const mensajeSin = comentariosDiv.querySelector(".sin-comentarios");
  if (mensajeSin) mensajeSin.remove();

    comentariosDeEstaReceta.forEach(v => {
    const comentarioItem = document.createElement("div");
    comentarioItem.classList.add("comentario-item");
    comentarioItem.innerHTML = `
      <p><strong>${v.usuario}</strong></p>
      <p>${"★".repeat(v.estrellas)} (${v.estrellas}/5)</p>
      <p>${v.comentario}</p>
      <hr>
    `;
    comentariosDiv.appendChild(comentarioItem);
  });
}

document.getElementById("btnEnviar").addEventListener("click", (event) => {
   event.preventDefault();
const comentario = document.getElementById("comentario").value;


  const datos = {
    receta: receta.nombre,
    estrellas: puntuacion,
    comentario: comentario,
    usuario: usuario
  };

  postEvent("agregarValoracion", datos, (resultado) => {
 if (resultado === false) {
    alert(" Ya valoraste esta receta");
    return;
  }

    

let todosLosComentarios = JSON.parse(localStorage.getItem("valoracionesGuardadas")) || [];
todosLosComentarios.push(datos);
localStorage.setItem("valoracionesGuardadas", JSON.stringify(todosLosComentarios));

document.getElementById("comentario").value = "";
    document.querySelectorAll(".estrellas span").forEach(s => s.classList.remove("active"));
    puntuacion = "";

     mostrarComentariosGuardados();
});
});


