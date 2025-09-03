import fs from "fs"
let nuevonombrer= "lolo"
let nuevacontraseña= "1234"
let basededatosinter = fs.readFileSync ("INICIODESECION/Usuarios.json", "utf-8");
let basededatos = JSON.parse (basededatosinter)



function registrarse(nuevonombre, nuevacontraseña){
let registro = {nombre : nuevonombre, contraseña: nuevacontraseña}
return registro;
}
basededatos.push (registrarse)

fs.writeFileSync ("Usuarios.json", JSON.stringify (basededatos, null, 2))



function iniciodesesion (nombredeusuario, contraseña) {
for  (let i = 0 ; i< basededatos.length ; i++)
{
if (basededatos[i].nombre ===  nombredeusuario && basededatos[i].contraseña === contraseña){
return true;
}
}
}
