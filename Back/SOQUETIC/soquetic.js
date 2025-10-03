import fs from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";


import { iniciodesesion } from "../INICIODESESION/Creacion.js"
import { registroEvent } from "../INICIODESESION/Creacion.js"

subscribePOSTEvent ("registro",registroEvent )
subscribePOSTEvent ("iniciodesesion", iniciodesesion)
console.log ("soquetic anda")
startServer (3000, true)
