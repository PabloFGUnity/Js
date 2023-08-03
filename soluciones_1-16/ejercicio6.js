// Ejercicio 6
// Dado un número entero A, hacer un algoritmo que
// determine si es par, impar o nulo. Pista: para determinar el
// resto de una división, se usa la operación módulo %.

const prompt = require("prompt-sync")();

let number = Number(prompt("Introduce un número: "));

if (number === 0) {
  console.log("El numero es cero");
} else if (number % 2 === 0) {
  console.log("El numero es par");
} else if (number % 2 === 1) {
  console.log("El numero es impar");
} else {
  console.log(`El número nos par ni impar`);
}
