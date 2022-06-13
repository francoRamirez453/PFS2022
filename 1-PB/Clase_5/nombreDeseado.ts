import * as rls from 'readline-sync'

let dimensionArreglo : number= rls.questionInt("Ingrese la dimension del arreglo: ");
let nombrePersona : string[] = new Array (dimensionArreglo);
let indice:number;
for(indice = 0;indice<dimensionArreglo;indice++){
    nombrePersona[indice]=rls.question("Ingrese el nombre deseado: ",[indice])

}
for(indice = 0;indice<dimensionArreglo;indice++){
    console.log("la persona que ingreso en la posicion",[indice],"es: ",nombrePersona[indice])
}