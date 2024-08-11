/*Ejercicio 1: Switch
El objetivo de este ejercicio es imprimir en consola un texto que irá
variando según el día que contenga la variable dia. Para esto, ya
presentamos un código hecho con if/else que tendremos que modificar
y convertirlo a un switch, manteniendo el mismo resultado.*/

let dia="Lunes";
switch(dia){
case "Lunes":
console.log("El dia es lunes");
 break;
 case "Martes":
    console.log("El dia es martes");
    break;
case "Miercoles":
    console.log("El dia es miercoles");
    break;
case "Jueves":
console.log("El dia es jueves");
break;
case "Viernes":
    console.log("El dia es viernes");
    break;
case "Sabado":
    console.log("El dia es sabado");
    break;
default:
console.log("El dia es domingo");
}