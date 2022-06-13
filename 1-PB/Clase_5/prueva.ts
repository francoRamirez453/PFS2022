//import * as readlineSync from 'readline-sync'

//let elem, arr, nro, ocu;
//elem = readlineSync.questionInt("Ingrese tamaño: ");
//arr = new Array(elem);
//cargar(arr);
// nro = readlineSync.questionInt("Ingrese numero: ",arr);
//ocu = funcion(arr,nro);
//console.log(`El numero ${nro} ... ${ocu}`);
//mostrar(arr, elem)
//function cargar(v) {
//    for (let i = 0; i < v.length; i++)
//            v[i]=Math.floor(Math.random()*100);
//}
//function mostrar(v,n) {
//    let c="";
//    for (let i = 0; i < v.length; i++)
//            c+= v[i] + " ";
//            
//    console.log(c);
//    return n
//}
//function funcion(v,n) {
//    let o=0;
//    for (let i = 0; i < v.length; i++)
//            if (v[i] == n)
//                    o+=1;
//                    return o
//}

let venCamila=  new Array(12) ,
 venFranco=  new Array(12),
 venAlicia=  new Array(12),
 venMatias=  new Array(12),
 venSandra=  new Array(12);
venCamila= [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]; //Camila
venFranco= [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855]; //Franco
venAlicia= [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218]; //Alicia
venMatias= [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006]; //Matias
venSandra= [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]; //Sandra
for(let i=0;i < venAlicia.length;i++){
    venAlicia[i]=Math.max(venAlicia[i])
console.log("sfsf",venAlicia)

}