import fs from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";


import { iniciodesesion } from "../INICIODESESION/Creacion.js"
import { registroEvent } from "../INICIODESESION/Creacion.js"
import {agregarFavorito} from "../PANTALLA/recetas.js"
import {favoritos} from "../PANTALLA/recetas.js"
import {valoracion} from "../PANTALLA/recetas.js"
import {leerrecetas} from "../PANTALLA/recetas.js"


subscribePOSTEvent ("registro",registroEvent )
subscribePOSTEvent ("iniciodesesion", iniciodesesion)
console.log ("soquetic anda")


subscribePOSTEvent("agregarFavorito", agregarFavorito);
subscribeGETEvent("favoritos", favoritos);
subscribePOSTEvent("agregarValoracion", valoracion);
subscribeGETEvent ("leerrecetas", leerrecetas)



startServer (3000, true)




