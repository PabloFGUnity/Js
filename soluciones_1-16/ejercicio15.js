// Ejercicio 15
// Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero,
// se vuelva a pedir el número por teclado, así hasta que se teclee un número
// mayor que cero, recuerda la estructura while.

const prompt = require("prompt-sync")();

// let number = Number(prompt("Introduce un número: "));

// while (number === 0) {
//   number = Number(prompt("Introduce un número: "));
// }

// if (number % 2 === 0) {
//   console.log("El número es par");
// } else {
//   console.log("El número es impar");
// }
let number;
do {
  number = Number(prompt("Introduce un número: "));
} while (number === 0);

if (number % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
