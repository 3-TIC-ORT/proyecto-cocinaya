connect2Server();

const contenedor = document.getElementById("contenedorRecetas");

getEvent("leerrecetas", {}, (recetas) => {
  console.log("Recetas recibidas:", recetas);

  contenedor.innerHTML = ""; 

  recetas.forEach((receta) => {
    const card = document.createElement("div");
    card.className = "tarjetaReceta";

    
    const pasos = receta.procedimiento.split("|").map(p => `<li>${p.trim()}</li>`).join("");

    card.innerHTML = `
      <img src="${receta.imagen}" style="width:200px;border-radius:10px;">
      <h2>${receta.nombre}</h2>
      
      <p><b>Ingredientes:</b></p>
      <ul>
        ${receta.ingredientes.map(i => `<li>${i.cantidad} de ${i.tipo}</li>`).join("")}
      </ul>

      <p><b>Procedimiento:</b></p>
      <ol>${pasos}</ol>
    `;

    contenedor.appendChild(card);
  });
});