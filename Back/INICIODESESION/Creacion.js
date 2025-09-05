import fs from "fs"
let nuevonombre= "shuli" // nombre traido de front
let nuevacontraseña= "mejorprofe" // contra traida de front
let basededatosinter = fs.readFileSync ("./Usuarios.json", "utf-8");
let basededatos = JSON.parse(basededatosinter)


function registrarse(nuevonombre, nuevacontraseña){
let registro = {nombre :  nuevonombre, contraseña: nuevacontraseña}
return registro;

}
basededatos.push (registrarse(nuevonombre, nuevacontraseña))

fs.writeFileSync ("./Usuarios.json", JSON.stringify (basededatos, null, 2))


function iniciodesesion (nombredeusuario, contraseña) {
for  (let i = 0 ; i< basededatos.length ; i++)
{
if (basededatos[i].nombre ===  nombredeusuario && basededatos[i].contraseña === contraseña){
return console.log ("contraseña correcta")//ingreso a la pagina;
}
else return console.log ("contraseña o usuario incorrectos")
}
}
