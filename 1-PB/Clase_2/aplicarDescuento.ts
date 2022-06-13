import * as readlineSync from 'readline-sync'; 


let precioProducto : number = readlineSync.questionInt("Ingrese el precio del producto: ");
            
            console.log("Precio del producto:  $" + precioProducto);
    
    let cantidad : number = readlineSync.questionInt("Cantidad de producto: ");
               
            console.log("Cantidad: "+ cantidad);
               
        let precioTotal : number = precioProducto*cantidad;
                    
                    console.log("El precio total es: $"+ precioTotal);

    if(precioTotal > 1000){
        let descuento : number = precioTotal*0.1; 
    console.log("Se aplica un descuento del 10%:  $" + descuento)
    console.log("El precio total es: $",precioTotal-descuento);
    }else{
    console.log("No se aplica ningun descuento, el total a pagar es: "+ precioTotal);
            }

            