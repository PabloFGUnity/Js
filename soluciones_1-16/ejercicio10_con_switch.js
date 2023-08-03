// Ejercicio 10
// Construir un algoritmo que dado la categoría y sueldo de
// un trabajador calcule el aumento de sueldo correspondiente
// teniendo en cuenta la siguiente tabla. Imprimir la categoría
// del trabajador y su nuevo sueldo.

const prompt = require("prompt-sync")();

let salario = Number(prompt("Introduce el sueldo "));
const categoria = Number(prompt("Introduce la categoria (1 al 4) "));
let incremento = 1;
switch (categoria) {
  case 1:
    salario = salario * 1.15;
    break;
  case 2:
    salario = salario * 1.1;
    break;
  case 3:
    salario = salario * 1.06;
    break;
  case 4:
    salario = salario * 1.03;
    break;
  default:
    console.log("Categoría no válida");
    break;
}

if (categoria >= 1 && categoria <= 4) {
  console.log(`Con categoría ${categoria} tu nuevo sueldo es ${salario}`);
}
