const prompt = require("prompt-sync")({ sigint: true });

let numero;
let maximo = Number.MIN_SAFE_INTEGER;
let minimo = Number.MAX_SAFE_INTEGER;
let numerador = 0;
let denominador = 0;

do {
  numero = parseInt(prompt("Introduce un número: "));
  if (!isNaN(numero)) {
    numerador += numero;
    denominador++;
    if (numero > maximo) {
      maximo = numero;
    }
    if (numero < minimo) {
      minimo = numero;
    }
  }
} while (numero !== 0);

if (denominador > 0) {
  console.log(`la media es ${numerador / denominador}`);
  console.log(`el máximo es ${maximo} y el mínimo es ${minimo}`);
}
