/*Ejercicio 3: Switch
Utilizando la estructura switch, crea un programa que le pida al usuario
valorar la película que acaba de ver según la siguiente escala:
✓ Muy mala.
✓ Mala.
✓ Mediocre.
✓ Buena.
✓ Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás
o te alegrás por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos
mucho."
En caso de que el usuario ingrese un valor distinto, mostrarle el
mensaje: "Ingresaste un valor inválido".
Finalmente, agradecer al usuario por su visita.*/

const prompt = require("prompt-sync")({ sigint: true }); 

let valoracion=parseFloat(prompt("Ingrese la valoracion para la pelicula: "));

switch(valoracion){
    case 1: 
    console.log("Calificaste la pelicula como muy mala. Lo lamentamos mucho");
    console.log("Te agradecemos por tu visita");
    break;
    case 2: 
    console.log("Calificaste la pelicula como mala. lo lamentamos mucho");
    console.log("Te agradecemos por tu visita");
    break;
    case 3: 
    console.log("Calificaste la pelicula como mediocre. lo lamentamos mucho");
    console.log("Te agradecemos por tu visita");
    break;
    case 4: 
    console.log("Calificaste la pelicula como buena. Genial!!");
    console.log("Te agradecemos por tu visita");
    case 5: 
    console.log("Calificaste la pelicula como muy buena. Espectacular!");
    console.log("Te agradecemos por tu visita");
    default:
        console.log("Ingresaste un valor inválido");
}
