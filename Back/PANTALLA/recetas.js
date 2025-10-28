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




// AGREGAR COMENTARIOS (GOOGLE) (LINKEADO CON USUARIOS.NOMBRE) {ULTIMA SEMANA }


// ESTRELLAS {MIERCOLES} 
// AGREGAR COMENTARIOS (GOOGLE) (LINKEADO CON USUARIOS.NOMBRE) {ULTIMA SEMANA }
//esto fue junto, ya esta hecho, yo agarro el objeto, lo pusheo y lo devuelvo, uri sube las cosas



function valoracion (loquemandaelfront)
{
let datosdelavaloracion = {loquemandaelfront: loquemandaelfront}
{for (let i= 0; i<parsearvaloraciones.length; i++)
    {
    let leerlistadevaloraciones = fs.readFileSync("../PANTALLA/valoraciones.json", "utf-8");
    let parsearvaloraciones = JSON.parse(leerlistadevaloraciones)
    if (
    parsearvaloraciones[i].usuario === loquemandaelfront.usuario)
    console.log ("ya valoraste")
    return null
    }
    leerarchivo.push ({loquemandaelfront: comentariorecetausuarioyestrellas})
    fs.writeFileSync ("../PANTALLA/favoritos.json", JSON.stringify (parsearvaloraciones, null, 2))
    }
}
subscribePOSTEvent("agregarValoracion", valoracion);
startServer(3000, true);
// lea el archivo. Tome los 3 parametros y pushee el objeto.
// leerarchivoparse[i].receta === loquemandaelfront.receta leerarchivoparse[i].estrellas === loquemandaelfront.estrellas
