// Ejercicio 17
// Se pide representar un algoritmo que nos calcule la suma
// de los N primeros números naturales. N se leerá por teclado.

const prompt = require("prompt-sync")();

let N = Number(prompt("Introduce un número: "));

let count = 0;
let sum = 0;

for (let count = 1; count < N; count++) {
  // si metemos un 8 ---> da 8 vueltas
  sum = sum + count;
  console.log(sum);
}

// primera vuelta --- 0 + 0
// segunda vuelta --- 0 + 1
// tercera vuelta --- 1 + 2
// cuarta vuelta ---  3 + 3
// quinta vuelta ---  6 + 4
// sexta vuelta ---  10 + 5
// septima vuelta -- 15 + 6
// octava vuelta --- 21 + 7
