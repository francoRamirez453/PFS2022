import * as rls from 'readline-sync'

 let nombre : string[]= new Array(2);
 //nombre = rls.question("Ingrese los nombres");
 let indice: number;
 for(indice=0;indice<2;indice++){
    nombre[indice]=rls.question("Ingrese nombres:",[indice]);
   
 }
 for(indice=0;indice<2;indice++){
    console.log("Los nombres ingresado son: " ,nombre[indice])
 }

 
 let numeros: number[] = new Array(3);
 
 let i :number;
 for(i=0;i<3;i++){
     numeros[i]=rls.questionInt("Ingrese los numeros: ",[i]);
  
 }
 for(i=0;i<3;i++){
    console.log("Los numeros ingresados son: ", numeros[i])
 }
 
 