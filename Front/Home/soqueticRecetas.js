connect2Server(3000);


const contenedor = document.getElementById("recetas-container");


getEvent("leerrecetas", (recetas) => {
  mostrarRecetas(recetas);
});


function mostrarRecetas(recetas) {
  contenedor.innerHTML = ""; 
  recetas.forEach((receta) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-receta");

    tarjeta.innerHTML = `
      <img src="${receta.imagen}" alt="${receta.nombre}">
      <h2>${receta.nombre}</h2>
      <h3>Ingredientes:</h3>
      <ul>
        ${receta.ingredientes.map(i => `<li>${i.cantidad} ${i.tipo}</li>`).join("")}
      </ul>
      <h3>Procedimiento:</h3>
      <p>${receta.procedimiento}</p>
    `;

    contenedor.appendChild(tarjeta);
  });
}