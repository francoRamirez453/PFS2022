import * as rls from 'readline-sync'; 

let clave : string = "eureka";

let claveIncorrecta : number = 0

while(claveIncorrecta<3){
    let ingresarClave: string  = rls.question("Ingrese clave: ")
    if(clave==ingresarClave){
        console.log("Bienvenido")
        claveIncorrecta=3

    }if(clave != ingresarClave){
        claveIncorrecta=claveIncorrecta+1
        console.log("Intentos: ",claveIncorrecta)
        console.log("No puede ingresar")

    }
}
        