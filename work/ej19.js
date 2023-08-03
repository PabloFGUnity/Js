const prompt = require("prompt-sync")({ sigint: true });

let numero;
let numerador = 0;
let denominador = 0;

do {
  numero = parseInt(prompt("Introduce un número: "));
  if (!isNaN(numero) && numero >= 0) {
    numerador += numero;
    denominador++;
  }
} while (numero !== -1);

if (denominador > 0) {
  console.log(`la media es ${numerador / denominador}`);
}
