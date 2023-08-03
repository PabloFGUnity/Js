// Ejercicio 18
// Se pide representar el algoritmo que nos calcule la suma de
// los N primeros numeros pares a partir de N. Es decir,
// si insertamos un 5, nos haga la suma de 6+8+10+12+14.

const prompt = require("prompt-sync")();

let N = Number(prompt("Introduce N: "));

// Asegurarme de que el numero que introduce el usuario es impar

let initialNumber = N;

if (initialNumber % 2 !== 0) {
  initialNumber = initialNumber + 1;
}

let count = 0;
let sum = 0;

/* while (count < N) {
  sum = sum + initialNumber;
  console.log(initialNumber);

  initialNumber = initialNumber + 2;
  count = count + 1;
} */

for (let i = 0; i < N; i++) {
  sum = sum + initialNumber;
  console.log(initialNumber);
  initialNumber = initialNumber + 2;
}

/**
 * for(inicializacion de una variable; condicion de parada; aumentar el contador para llegar a la condicion de parada){
 * algo de codigo
 * }
 */

console.log(`La suma final es de: ${sum}`);
