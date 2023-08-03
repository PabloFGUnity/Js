// Ejercicio 5
// Construir algoritmo tal que con un número entero como
// entrada, determine e imprima si es positivo, negativo o nulo.

const prompt = require("prompt-sync")();

let numero = Number(prompt("Introduce un número: "));

if (isNaN(numero)) {
  console.log("No has introducido un numero");
} else if (numero < 0) {
  console.log("El numero es negativo");
} else if (numero > 0) {
  console.log("El numero es positivo");
} else {
  console.log("El numero es nulo o cero");
}
