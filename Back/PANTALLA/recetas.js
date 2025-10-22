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




let datosdelavaloracion = {loquemandaelfront: loquemandaelfront}

function valoracion (loquemandaelfront)
{for (let i= 0; i<leerarchivo.length; i++)
    {
    leerarchivointer
    leerarchivo
    if (
    leerarchivo[i].usuario === loquemandaelfront.usuario)
    console.log ("ya comentaste")
    return null
    }
    leerarchivo.push ({loquemandaelfront1: usuario, loquemandaelfront2: estrellas, loquemandaelfront3: receta}) //x3 )
    fs.writeFileSync ("../PANTALLA/favoritos.json", JSON.stringify (leerarchivo, null, 2))
    }


// lea el archivo. Tome los 3 parametros y pushee el objeto.
// leerarchivoparse[i].receta === loquemandaelfront.receta leerarchivoparse[i].estrellas === loquemandaelfront.estrellas
