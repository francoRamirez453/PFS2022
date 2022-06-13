import * as rls from 'readline-sync'; 

let clave : string = "eureka";

let intentos : number = 0
let claveIngresada : string = "";3

while(intentos<3 && claveIngresada != clave){
    claveIngresada = rls.question("Ingrese la clave: ")
    intentos++

}
if(claveIngresada != clave){
    console.log("Ya no tenes mas intentos")

}
