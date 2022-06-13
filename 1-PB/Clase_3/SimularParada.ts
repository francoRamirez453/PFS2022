import * as readlineSync from 'readline-sync'; 

let llegadaColectivo: string;
   console.log("Esperando el colectivo");

   llegadaColectivo = readlineSync.question("Llega el colectivo S/N: ");

   while(llegadaColectivo == "N"){
       console.log("Esperando el colectivo");

       llegadaColectivo = readlineSync.question("Llega el colectivo S/N: ");

   }

   console.log("Llego el colectivo")

