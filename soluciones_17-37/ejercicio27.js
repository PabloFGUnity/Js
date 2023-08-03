// Ejercicio 27
//Desarrollar un algoritmo que imprima la tabla de multiplicación del
//número N introducido por teclado. Para N = 13, el output sería:
// 13 X 1 = 13
// 13 X 2 = 26
// …
// 13 X 10 = 130

const prompt = require("prompt-sync")();

let numero = Number(prompt("Tabla del : "));

if (!isNaN(numero)) {
  console.log(`La tabla del ${numero} es:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
  }
}
