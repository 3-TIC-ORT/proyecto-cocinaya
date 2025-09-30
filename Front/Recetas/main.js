document.addEventListener("DOMContentLoaded", () => {
    let estrellas = document.querySelectorAll(".estrellas span");
  
    estrellas.forEach(estrella => {
      estrella.addEventListener("click", () => {
        let valor = parseInt(estrella.getAttribute("data-value"));
  
        
        estrellas.forEach(e => e.classList.remove("selected"));
  
       
        for (let i = 0; i < valor; i++) {
          estrellas[i].classList.add("selected");
        }
      });
    });
  });

  const favorito = document.getElementById("favorito");
  const favMsg = document.getElementById("favMsg");
  
  favorito.addEventListener("click", () => {
    favorito.classList.toggle("active");
  
    if (favorito.classList.contains("active")) {
      mostrarMsg("Se añadió a favoritos");
    } else {
      mostrarMsg("Se quitó de favoritos");
    }
  });
  
  function mostrarMsg(texto) {
    favMsg.textContent = texto;
    favMsg.style.display = "inline-block";
  
    setTimeout(() => {
      favMsg.style.display = "none";
    }, 2000);
  }
  