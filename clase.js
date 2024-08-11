
console.log(10<20 ? "El numero es menor que 20" : "El numero es mayor que 20");

let edad=1;

switch(edad){

case 5:
    console.log("Tiene 5 años");
    break;

case 10:
    console.log ("Tiene 10 años");
    break;

default: 
console.log("Codido por default");

}

// for (let cont=1; cont<=5;cont++){
//     console.log("Dando la vuelta numero: "+cont);
// }

let vuelta=1;

while(vuelta<=5){
    console.log("Dando la vuelta numero: "+vuelta);
     vuelta++
 }

let vuelta2=1;
do{
    console.log("Dando la vuelta numero: "+vuelta2);
    vuelta2++
}while(vuelta2<=5);