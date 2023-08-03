const prompt = require("prompt-sync")({ sigint: true });
let maximo = Number(prompt(`Introduce el número de elementos del array:`));
// Esta constante establece el límite de numeros enteros.
// Si MAX_INT = 100, entonces los enteros se generarán entre -100 y 100
// const maximo = 10;
const MAX_INT = 100;
const MAX_RANDOM = MAX_INT * 2 + 1;
let suma = 0;
let positivos = 0;
let sumaPositivos = 0;
const numbers = [];

for (let i = 0; i < maximo; i++) {
  numbers[i] = Math.floor(Math.random() * MAX_RANDOM) - MAX_INT;
  if (numbers[i] > 0) {
    positivos++;
    sumaPositivos += numbers[i];
  }
  suma += numbers[i];
}

console.log(numbers);
console.log(
  `Hay ${positivos} positivos con un promedio de ${sumaPositivos / positivos} `
);
console.log(`Hay ${maximo} números con un promedio de ${suma / maximo}`);
