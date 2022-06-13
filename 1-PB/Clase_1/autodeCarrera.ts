/**Importar el paquete de readlinesync */
import * as readlineSync from 'readline-sync'; 

let primeraVuelta: number = readlineSync.questionInt("Ingrese el tiempo de la primera vuelta: ");
let segundaVuelta: number = readlineSync.questionInt("Ingrese el tiempo de la segunda vuelta: ");
let terceraVuelta: number = readlineSync.questionInt("Ingrese el tiempo de la tercera vuelta: ");
let cuartaVuelta: number = readlineSync.questionInt("Ingrese el tiempo de la cuarta vuelta: ");
let tiempoTotal: number = primeraVuelta+segundaVuelta+terceraVuelta+cuartaVuelta
let promedioVuelta:number=tiempoTotal/4
console.log("El tiempo total es: ", tiempoTotal,"minutos");
console.log("El promedio por vuelta es: ",promedioVuelta,"minutos");
