import * as rls from 'readline-sync';

let tablaNum : number = rls.questionInt("Que numero de tabla: ");
let limite : number = rls.questionInt("Hasta qué número de la tabla desa multiplicar: ");
let resultado : number = 0;

for (let contador : number = 1; contador <= limite; contador++) {

    resultado = tablaNum * contador;

    console.log(tablaNum, " * ", contador, " = ", resultado );

}