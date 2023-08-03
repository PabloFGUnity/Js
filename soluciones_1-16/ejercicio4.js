// Ejercicio 4
// Diseñar un algoritmo que pida por teclado tres números;
// si el primero es negativo, debe imprimir el producto de
// los tres y si no lo es, imprimirá la suma.

const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Introduce el número 1: "));
let numero2 = Number(prompt("Introduce el número 2: "));
let numero3 = Number(prompt("Introduce el número 3: "));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
  //isNotaNumber
  console.log("Los datos DEBEN ser números");
} else {
  if (numero1 < 0) {
    const producto = numero1 * numero2 * numero3;
    console.log("El producto es:", producto);
  } else {
    const suma = numero1 + numero2 + numero3;
    console.log("La suma es:", suma);
  }
}
