import fs from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
let nuevonombre= "shuli" // nombre traido de front
let nuevacontraseña= "mejorprofe" // contra traida de front
let basededatosinter = fs.readFileSync ("../INICIODESESION/Usuarios.json", "utf-8");
let basededatos = JSON.parse(basededatosinter)


function registrarse(nuevonombre, nuevacontraseña){
basededatosinter
for  (let i = 0 ; i< basededatos.length ; i++)
if (nuevonombre === basededatos[i].nombre || nuevacontraseña === basededatos[i].contraseña)
{console.log ("no valido, ingrese otro nombre")
return null
}
}

let registro = {nombre :  nuevonombre, contraseña: nuevacontraseña}
registro

basededatos.push (registrarse(nuevonombre, nuevacontraseña))
fs.writeFileSync ("../INICIODESESION/Usuarios.json", JSON.stringify (basededatos, null, 2))


export function iniciodesesion (nombredeusuario, contraseña) {
basededatosinter
for  (let i = 0 ; i< basededatos.length ; i++)
{
if (basededatos[i].nombre ===  nombredeusuario && basededatos[i].contraseña === contraseña){
return console.log ("contraseña correcta")//ingreso a la pagina;
}
else return console.log ("contraseña o usuario incorrectos")
}
}

export function registroEvent(nuevacontraseña, nuevonombre){ 
    basededatos.push (registrarse(nuevonombre, nuevacontraseña))
    fs.writeFileSync ("../INICIODESESION/Usuarios.json", JSON.stringify (basededatos, null, 2))

}
