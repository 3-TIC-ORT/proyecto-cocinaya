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

favorito.addEventListener("click", () => {
  favorito.classList.toggle("active");
});
