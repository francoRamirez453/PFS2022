//let num: number[] = new Array(7)
//num = [20, 14, 8, 0, 5, 19, 24]
//
//console.log(num)

//import * as rls from 'readline-sync'
//
//let numeroMes : string[] = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
//
//let indiqueMes : number = rls.questionInt("Indique el numero del mes: ")
//
//
//let indice: number= indiqueMes-1
//console.log(numeroMes[indice]);

import * as rls from 'readline-sync'

let numeroMes : number[] = new Array (5);
let numero : number , indice:number;

for(indice=0;indice<5;indice++){
    numero = rls.questionInt('Indique el numero deseado:',[indice])
    numeroMes[indice]=numero
}
for(indice=0;indice<5;indice++){
console.log("El numero en la posicion es: ",[indice,"es",numeroMes[indice]])
}

