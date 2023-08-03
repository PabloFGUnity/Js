// Ejercicio 2
// Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.

const prompt = require("prompt-sync")({ sigint: true });

let A = Number(prompt("Introduce la variable A: "));
let B = Number(prompt("Introduce la variable B: "));

if (isNaN(A)) {
  console.log("A no es número");
} else if (isNaN(B)) {
  console.log("B no es un número");
} else {
  console.log(`la suma es ${A + B}`);
  console.log(`la resta es ${A - B}`);
  console.log(`la multiplicación es ${A * B}`);
  console.log(`la división es ${A / B}`);
}
console.log("fin");
