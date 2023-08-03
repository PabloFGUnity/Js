// Ejercicio 1
// Dadas dos variables numéricas A y B, que el usuario debe teclear,
// se pide realizar un algoritmo que intercambie los valores de ambas
// variables y muestre cuánto valen al final cada una de ellas (recuerda la asignación).
const prompt = require("prompt-sync")({ sigint: true });

let A = prompt("Introduce la variable A: ");
let B = prompt("Introduce la variable B: ");

let aux = A;
A = B;
B = aux;

console.log("Las variables son A:", A, "y B:", B);
console.log(a+b);
