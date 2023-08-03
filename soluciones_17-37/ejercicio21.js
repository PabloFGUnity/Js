// Ejercicio 21
// Algoritmo que lea números enteros hasta teclear 0, y
// nos muestre el máximo, el mínimo y la media de todos
// ellos. Piensa como debemos inicializar las variables.

const prompt = require("prompt-sync")({ sigint: true });

let numero;
let minimo;
let maximo;
let numerador = 0;
let denominador = 0;

while (numero !== 0) {
  numero = Number(prompt("Introduce un numero: "));
  if (numero > 0) {
    if (numero < minimo || !minimo) {
      minimo = numero;
    }
    if (numero > maximo || !maximo) {
      maximo = numero;
    }
    numerador += numero; // numerador = numerador + numero;
    denominador++; // denominador = denominador + 1;
    console.log(
      `numero:${numero}, max: ${maximo}, minimo: ${minimo}, media: ${
        numerador / denominador
      }`
    );
  }
}

// let sum = 0; //creamos una variable suma para guardar las sumas de los numeros que introduce el usuario
// let numberAmount = 0; // creamos una variable para guardar la cantidad de numeros introducidos para poder hacer la media

// let number = Number(prompt("Introduce un numero: ")); // Pedimos un numero al usuario
// // usuario introduce un 20
// let max = number; // creamos una variable para guardar el numero maximo que ha introducido el usuario
// let min = number; // creamos una variable para guardar el numero minimo que ha introducido el usuario

// function getAverage(totalSum, numberAmount) {
//   const result = totalSum / numberAmount;
//   return result;
// }

// while (number !== 0) {
//   sum = sum + number; //hacemos la suma en cada iteracion (vuelta)
//   numberAmount = numberAmount + 1; // aumentamos el contador de numeros en 1

//   //comprobar que el numero introducido es mayor que el maximo
//   if (number > max) {
//     max = number; //20
//   }

//   //comprobar que el numero introducido es menor que el minimo
//   if (number < min) {
//     min = number; //15
//   }

//   number = Number(prompt("Introduce un numero: "));
// }

// for (numberAmount; number !== 0; numberAmount++) {
//   sum = sum + number;
//   if (number > max) {
//     max = number;
//   }
//   if (number < min) {
//     min = number;
//   }
//   number = Number(prompt("Introduce un numero: "));
// }

// if (numberAmount === 0) {
//   console.log("No se ha introducido ningun numero valido");
// } else {
//   /* const average = sum / numberAmount; */

//   console.log(`La media es: ${getAverage(sum, numberAmount)}`);

//   console.log(`El numero maximo es ${max}`);
//   console.log(`El numero minimo es ${min}`);
// }
