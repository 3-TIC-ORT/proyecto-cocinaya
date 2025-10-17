import fs from "fs"
import { subscribeGETEvent, subscribePOSTEvent, realTimeEvent, startServer } from "soquetic";
let nuevonombre= "shuli" // nombre traido de front
let nuevacontraseña= "mejorprofe" // contra traida de front




function registrarse(nuevonombre, nuevacontraseña)
{console.log ("arranca")
let basededatosinter = fs.readFileSync ("../INICIODESESION/Usuarios.json", "utf-8");
let basededatos = JSON.parse(basededatosinter)
console.log(basededatos)
for  (let i = 0 ; i< basededatos.length ; i++){
        if (nuevonombre === basededatos[i].nombre || nuevacontraseña === basededatos[i].contraseña)
        {console.log ("no valido, ingrese otro nombre")
        return false
        }
}

basededatos.push({nombre:nuevonombre, contraseña:nuevacontraseña})
fs.writeFileSync ("../INICIODESESION/Usuarios.json", JSON.stringify (basededatos, null, 2))
console.log ("sigue, debe ser del if")
return basededatos


} 

let registro = {nombre :  nuevonombre, contraseña: nuevacontraseña}
registro


export function iniciodesesion (nombredeusuario, contraseña) {
let basededatosinter = fs.readFileSync ("../INICIODESESION/Usuarios.json", "utf-8");
let basededatos = JSON.parse(basededatosinter)

for  (let i = 0 ; i< basededatos.length ; i++)
{
if (basededatos[i].nombre ===  nombredeusuario && basededatos[i].contraseña === contraseña){
return console.log ("contraseña correcta")//ingreso a la pagina;
}
else return console.log ("contraseña o usuario incorrectos")
}
}

export function registroEvent(user){
    const nuevonombre = user.user
    const nuevacontraseña = user.contraseña 
    return registrarse (nuevonombre, nuevacontraseña)
}
