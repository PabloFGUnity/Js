/**
 * Algoritmo que lea dos números y nos diga cuál de ellos es mayor o si son iguales 
 * (recuerda usar la estructura condicional if).
    Ahora con 3 números diferentes.
 */
const prompt = require("prompt-sync")();

const number = Number(prompt("Introduce el primer numero: "));
const number2 = Number(prompt("Introduce el segundo numero: "));

//tengo que comprobar que numero1 mayor que el otro
if (number > number2) {
  console.log("El primer numero es mayor que el segundo");
  //tengo que comprobar que numero1 es menor que el otro
} else if (number < number2) {
  console.log("El primer numero es menor que el segundo");
} else if (number === number2) {
  console.log("Son iguales");
} else {
  console.log("otro caso");
}

const number3 = Number(prompt("Introduce el tercer numero: "));

if (number > number2 && number > number3) {
  console.log(`el número ${number} es el mayor`);
} else if (number2 > number && number2 > number3) {
  console.log(`el número ${number2} es el mayor`);
} else if (number === number2 && number === number3) {
  console.log(`los tres números son iguales a ${number}`);
} else {
  console.log(`el número ${number3} es el mayor`);
}
