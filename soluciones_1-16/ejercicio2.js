//Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.

const prompt = require("prompt-sync")();

const number1 = Number(prompt("Introduce el primer numero: "));
const number2 = Number(prompt("Introduce el segundo numero: "));

console.log(`la suma es ${number1 + number2}`);
console.log(`la multiplicación es ${number1 * number2}`);
console.log(`la división es ${number1 / number2}`);
console.log(`la resta es ${number1 - number2}`);

// Alternativa 2

const sum = number1 + number2;
const rest = number1 - number2;
const multiply = number1 * number2;
const divide = number1 / number2;

console.log(`La suma del primer numero mas el segundo numero es: ${sum}`);
console.log("La resta del primer numero menos el segundo numero es: " + rest);
console.log(
  "La multiplicacion del primer numero por el segundo numero es: ",
  multiply
);
console.log(
  "La division del primer numero entre el segundo numero es: ",
  divide
);
