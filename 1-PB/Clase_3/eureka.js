"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var clave = "eureka";
var claveIncorrecta = 0;
while (claveIncorrecta < 3) {
    var ingresarClave = rls.question("Ingrese clave: ");
    if (clave == ingresarClave) {
        console.log("Bienvenido");
        claveIncorrecta = 3;
    }
    if (clave != ingresarClave) {
        claveIncorrecta = claveIncorrecta + 1;
        console.log("Intentos: ", claveIncorrecta);
        console.log("No puede ingresar");
    }
}
