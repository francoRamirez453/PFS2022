import * as readlineSync from 'readline-sync';

let ingresarNumero : number = readlineSync.questionInt("Ingrese un numero: ");

if(ingresarNumero %2 == 0  ){
    console.log("El numero es par");

}else{
    console.log("El numero es Impar");
}if(ingresarNumero ==0){

    console.log("El numero ingresado es 0")

}