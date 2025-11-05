connect2Server();

const contenedor = document.getElementById("contenedorRecetas");

getEvent("leerrecetas", (recetas) => {
  console.log("Recetas recibidas:", recetas);

  contenedor.innerHTML = ""; 

  recetas.forEach((receta) => {
    const card = document.createElement("div");
    card.className = "tarjetaReceta";

    
    
  });
});