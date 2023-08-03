// Ejercicio 10
// Construir un algoritmo que dado la categoría y sueldo de
// un trabajador calcule el aumento de sueldo correspondiente
// teniendo en cuenta la siguiente tabla. Imprimir la categoría
// del trabajador y su nuevo sueldo.

const prompt = require("prompt-sync")();

let salario = Number(prompt("Introduce el sueldo "));
const categoria = Number(prompt("Introduce la categoria (1 al 4) "));

// Opción con if-elses
if (categoria === 1) {
  salario = salario * 1.15; // salary *= 1.15
} else if (categoria === 2) {
  salario = salario * 1.1; // salary *=1.1
} else if (categoria === 3) {
  // saco factor comun
  // salary = salary + salary * 0.06 ; salary = salary*(1+0.06)
  salario = salario * 1.06;
} else if (categoria === 4) {
  salario = salario * 1.03;
}
{
  console.log("Categoría inválida. No se incrementa el sueldo.");
}
console.log(`Con categoría ${categoria} tu nuevo sueldo es ${salario}`);
