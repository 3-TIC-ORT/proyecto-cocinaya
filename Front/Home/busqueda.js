async function cargarRecetas() {
  const data = await getEvent("recetas", {});
  return data.recetas || [];
}

async function filtrarRecetas(texto) {
  const recetas = await cargarRecetas();
  texto = texto.toLowerCase();

  return recetas.filter(r =>
    r.nombre.toLowerCase().includes(texto) || 
    r.ingredientes.some(ing =>
      ing.nombre.toLowerCase().includes(texto)
    )
  );
}

async function iniciarBuscador() {
  const input = document.getElementById("buscador");
  const contenedor = document.getElementById("resultados");

  input.addEventListener("input", async () => {
    const texto = input.value.trim();
    const resultados = await filtrarRecetas(texto);

    contenedor.innerHTML = "";

    if (resultados.length === 0) {
      contenedor.innerHTML = "<p>No hay recetas con ese nombre o ingrediente.</p>";
      return;
    }

    resultados.forEach(r => {
      const div = document.createElement("div");
      div.classList.add("receta-item");

      div.innerHTML = `
        <h3>${r.nombre}</h3>
        <p>Ingredientes: ${r.ingredientes.map(i => i.nombre).join(", ")}</p>
      `;

      contenedor.appendChild(div);
    });
  });
}

connect2Server();
iniciarBuscador();
