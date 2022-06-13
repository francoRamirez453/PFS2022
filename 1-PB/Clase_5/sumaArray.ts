import * as rls from 'readline-sync'

let dimensionArreglo : number= rls.questionInt("Ingrese la dimension del arreglo: ");
let n: number[] = new Array(dimensionArreglo)
let sum:number=0;


for (let i = 0; i < dimensionArreglo; i++) {
    
    n=rls.questionInt("Ingrese los numeros deseados: ",[i] )
   
    sum= sum+n[i];
    
   
}

 console.log(sum);
