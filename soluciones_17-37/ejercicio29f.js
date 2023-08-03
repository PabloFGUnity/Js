const prompt = require("prompt-sync")({ sigint: true });

const numero = Number(prompt("Introduzca número:"));

if (!isNaN(numero)) {
  console.log(`el factorial de ${numero} es ${factorial(numero)}`);
}

let resultado = 1;
for (let i = numero; i > 0; i--) {
  resultado *= i;
}
console.log(`el factorial de ${numero} es ${resultado}`);

function factorial(numero) {
  return numero === 1 ? 1 : numero * factorial(numero - 1);
  //   console.log(` numero ${numero} result ${result}`);
}
