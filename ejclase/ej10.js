const prompt = require("prompt-sync")({ sigint: true });

let sueldo = Number(prompt(`Dime tu sueldo: `));
let categoria = Number(prompt(`Dime tu categoria (1 al 4): `));
let incremento = 0;

// if (categoria === 1) {
//   incremento = 1.15;
// } else if (categoria === 2) {
//   incremento = 1.1;
// } else if (categoria === 3) {
//   incremento = 1.06;
// } else if (categoria === 4) {
//   incremento = 1.03;
// } else {
//   console.log("Categoría inválida");
// }
// if (incremento > 0) {
//   console.log(
//     `Para tu categoría ${categoria} y tu sueldo ${sueldo} te corresponde un nuevo sueldo de ${
//       sueldo * incremento
//     }`
//   );
// }

const incrementos = [1.15, 1.1, 1.06, 1.03, 1.02];
if (categoria >= 1 && categoria <= incrementos.length) {
  incremento = incrementos[categoria - 1];
} else {
  console.log("Categoría inválida");
}
if (incremento > 0) {
  console.log(
    `Para tu categoría ${categoria} y tu sueldo ${sueldo} te corresponde un nuevo sueldo de ${
      sueldo * incremento
    }`
  );
}
