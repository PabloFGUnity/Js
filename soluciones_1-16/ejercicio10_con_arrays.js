// Ejercicio 10
// Construir un algoritmo que dado la categoría y sueldo de
// un trabajador calcule el aumento de sueldo correspondiente
// teniendo en cuenta la siguiente tabla. Imprimir la categoría
// del trabajador y su nuevo sueldo.

const prompt = require("prompt-sync")();
const incrementos = [1.15, 1.1, 1.06, 1.03];

let salario = Number(prompt("Introduce el sueldo "));
const categoria = Number(prompt("Introduce la categoria (1 al 4) "));

if (categoria >= 1 && categoria <= 4 && !isNaN(salario)) {
  console.log(
    `El nuevo salario de la categoría ${categoria} es ${
      salario * incrementos[categoria - 1].toFixed(2)
    }`
  );
}

// Calcular el incremento de salario para todas las categorías

for (let i = 0; i < incrementos.length; i++) {
  console.log(
    `Con categoría ${i + 1} tu nuevo sueldo es ${salary * incrementos[i]}`
  );
}
// Lo mismo pere con for of
let i = 0;
for (let incremento of incrementos) {
  i++;
  console.log(
    `Con categoría ${i} tu nuevo sueldo es ${
      salary * incremento
    } aplicando ${incremento}`
  );
}
// Lo mismo pero usando el forEach de array
console.log("tercera");
incrementos.forEach((incremento, i) => {
  console.log(
    `Con categoría ${i + 1} tu nuevo sueldo es ${salary * incremento}`
  );
});
