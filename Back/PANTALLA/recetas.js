//  TRABAJAR CON UNA LISTA DE RECETAS
 
// mandar recetas al front (con uri)(PELADOS II) {ULTIMA SEMANA}


// AGREGAR FAVORITOS (WEATHER GIRLS) {MIERCOLES}


import fs from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

function agregarFavorito(favorito) {
    let leerlistadefavoritos = fs.readFileSync("../PANTALLA/favoritos.json", "utf-8");
    let parsearfavoritos = JSON.parse(leerlistadefavoritos)
    parsearfavoritos.push(favorito)
    fs.writeFileSync("../PANTALLA/favoritos.json", JSON.stringify(parsearfavoritos, null, 2));
    
}
function favoritos () {
let leerlistadefavoritos = JSON.parse(fs.readFileSync("../PANTALLA/favoritos.json", "utf-8"));
return leerlistadefavoritos;
}

subscribePOSTEvent("agregarFavorito", agregarFavorito);
subscribeGETEvent("favoritos", favoritos);




startServer(3000, true);
// AGREGAR COMENTARIOS (GOOGLE) (LINKEADO CON USUARIOS.NOMBRE) {ULTIMA SEMANA }


// ESTRELLAS {MIERCOLES}

function valoracion (loquemandaelfront)
{}

let leerarchivo = fs.readFileSync ("../PANTALLA/favoritos.json", "utf-8")
let leerarchivoparse = JSON.parse  (fs.readFileSync ("../PANTALLA/favoritos.json", "utf-8"))

// let datosdelavaloracion = {nombre :  nuevonombre, recetas: querecetaes, nuevavaloracion : cuantasestrellasda}


// if(leerarchivoparse.includes(datosdelavaloracion.nombre ))

for (let i= 0; i<leerarchivoparse.length; i++)
{if (
leerarchivoparse[i].usuario === loquemandaelfront.usuario &&
leerarchivoparse[i].receta === loquemandaelfront.receta &&
leerarchivoparse[i].estrellas === loquemandaelfront.estrellas )""}
