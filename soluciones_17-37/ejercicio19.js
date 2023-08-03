// Ejercicio 19
// Dada una secuencia de longitud indefinida de números
// leídos por teclado, que acabe con un –1, por ejemplo:
// 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; Realizar el algoritmo
// que calcule la media aritmética. Suponemos que el
// usuario no insertará número negativos.

const prompt = require("prompt-sync")();

let numero;
let numerador = 0;
let denominador = 0;
while (numero !== -1) {
  numero = Number(prompt("Introduce un número: "));
  if (numero !== -1 && numero >= 0) {
    numerador = numerador + numero;
    denominador = denominador + 1;
  }
}
console.log(`La media es ${numerador / denominador}`);
