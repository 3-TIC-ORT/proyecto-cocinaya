//  TRABAJAR CON UNA LISTA DE RECETAS
 
// mandar recetas al front (con uri)(PELADOS II) {ULTIMA SEMANA}



// AGREGAR FAVORITOS (WEATHER GIRLS) {MIERCOLES}


import fs from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";

export function agregarFavorito(favorito) {
    let leerlistadefavoritos = fs.readFileSync("../PANTALLA/favoritos.json", "utf-8");
    let parsearfavoritos = JSON.parse(leerlistadefavoritos)
    parsearfavoritos.push(favorito)
    fs.writeFileSync("../PANTALLA/favoritos.json", JSON.stringify(parsearfavoritos, null, 2));
    
}
export function favoritos () {
let leerlistadefavoritos = JSON.parse(fs.readFileSync("../PANTALLA/favoritos.json", "utf-8"));
return leerlistadefavoritos;
}

subscribePOSTEvent("agregarFavorito", agregarFavorito);
subscribeGETEvent("favoritos", favoritos);




// AGREGAR COMENTARIOS (GOOGLE) (LINKEADO CON USUARIOS.NOMBRE) {ULTIMA SEMANA }


// ESTRELLAS {MIERCOLES} 
// AGREGAR COMENTARIOS (GOOGLE) (LINKEADO CON USUARIOS.NOMBRE) {ULTIMA SEMANA }
//esto fue junto, ya esta hecho, yo agarro el objeto, lo pusheo y lo devuelvo, uri sube las cosas



export function valoracion (loquemandaelfront)
{
let leerlistadevaloraciones = fs.readFileSync("../PANTALLA/valoraciones.json", "utf-8");
let parsearvaloraciones = JSON.parse(leerlistadevaloraciones)

for (let i= 0; i<parsearvaloraciones.length; i++)
    {
    leerlistadevaloraciones 
    parsearvaloraciones 
    if (
    parsearvaloraciones[i].usuario === loquemandaelfront.usuario && 
    parsearvaloraciones[i].receta === loquemandaelfront.receta)
    {
    console.log ("ya valoraste")
    return false
    }
}

    parsearvaloraciones.push (loquemandaelfront) //: comentariorecetausuarioyestrellas})
    fs.writeFileSync ("../PANTALLA/valoraciones.json", JSON.stringify (parsearvaloraciones, null, 2))
return true}
subscribePOSTEvent("agregarValoracion", valoracion);

// lea el archivo. Tome los 3 parametros y pushee el objeto.
// leerarchivoparse[i].receta === loquemandaelfront.receta leerarchivoparse[i].estrellas === loquemandaelfront.estrellas

export function leerrecetas (loquepideelfront) {
let leerlistaderecetas = fs.readFileSync("../PANTALLA/recetas.json", "utf-8");
let parsearrecetas = JSON.parse(leerlistaderecetas)
return parsearrecetas
}

subscribeGETEvent ("leerrecetas", leerrecetas)




