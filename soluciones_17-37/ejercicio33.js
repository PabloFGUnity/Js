/*Crear un array de números donde le indicaremos el tamaño por 
teclado. Rellenará cada elemento con números aleatorios entre 0 y 9. 
Posteriormente, mostrará por pantalla el valor de cada posición 
junto con su índice y finalmente, la suma de todos los valores.
*/
const prompt = require("prompt-sync")({ sigint: true });
let numero = Number(prompt(`Introduce tamaño del array: `));
const array = [];
if (!isNaN(numero) && numero > 0) {
  for (let i = 0; i < numero; i++) {
    array[i] = Math.floor(Math.random() * 10);
  }
}

let suma = 0;
for (let i = 0; i < array.length; i++) {
  console.log(`El valor de la posición ${i + 1} es ${array[i]}`);
  suma += array[i];
}

console.log(`El valor de la suma es ${suma}`);
