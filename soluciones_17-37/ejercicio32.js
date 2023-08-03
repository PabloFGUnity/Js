/*Crear un array de tamaño 10 y que guardará números enteros 
introducidos por teclado. Tras introducirlos todos, imprimirá 
cada índice junto con el valor al que corresponda.
*/

const prompt = require("prompt-sync")({ sigint: true });

const array = [];

let i = 1;
do {
  let numero = Number(prompt(`Introduce número para posicion ${i}: `));
  if (!isNaN(numero)) {
    array[i - 1] = numero;
    i++;
  }
} while (i <= 10);

for (let i = 0; i < array.length; i++) {
  console.log(`El valor de la posición ${i} es ${array[i]}`);
}
