// Ejercicio 8
// Dado el sueldo de un trabajador, diseña un algoritmo
// que aplique un incremento de sueldo del 15% si el sueldo
// es inferior a 1000€. Imprimir el nuevo sueldo.

const prompt = require("prompt-sync")();

const salary = Number(prompt("Introduce el sueldo: "));

if (salary < 1000) {
  salary *= 1.15; // salary *= 1.15;
}

console.log(`El sueldo es ${salary} €`);
