"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var clave = "eureka";
var intentos = 0;
var claveIngresada = "";
3;
while (intentos < 3 && claveIngresada != clave) {
    claveIngresada = rls.question("Ingrese la clave: ");
    intentos++;
}
if (claveIngresada != clave) {
    console.log("Ya ni tienes mas intentos");
}
