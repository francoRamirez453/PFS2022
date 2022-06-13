import * as readlineSync from 'readline-sync';

    let usuario : string = readlineSync.question("Registre el usuario: ");
        
        let password : string = readlineSync.question("Registre el Password: ");
                
            console.log("El Usuario y el password se a registrado correctamente\n");
                
                    let ingresarUsuario : string = readlineSync.question("Ingresar usuario: ");
                
                        let ingresarPasword : string = readlineSync.question("Ingresar password: ", { hideEchoBack : true } );

        
                        if(ingresarUsuario == usuario && ingresarPasword == password){
               
            
        
                            console.log("El usuario y el password es correcto puede ingresar")

        
                        }else{
        
                            console.log("El usuario es incorrecto prueve de vuelta")
            
        
                        }