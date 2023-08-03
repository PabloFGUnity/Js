/*
   Crear un juego de tragaperras que genere una jugada calculando N combinaciones 
   de frutas de un total de 5 frutas diferentes.
   Además en cada jugada se calculará una apuesta de un valor entre 1 y 10.
   El premio será un múltipo de la apuesta juegada cuando ocurran cualquiera de estas 
   combinaciones:
   x1 si coinciden 2 frutas.
   x2 si coinciden 3 
   x3 si coinciden 4
   x4 si coinciden 5
*/
const frutas = ["🍏", "🍐", "🍊", "🍋", "🍌"];
const MAX_APUESTA = 10;
const MAX_FILAS = 8;
const jugada = [];
const repeticiones = [];
const apuesta = Math.floor(Math.random() * MAX_APUESTA) + 1;
for (let i = 0; i < frutas.length; i++) {
  repeticiones[i] = 0;
}
console.log(repeticiones);

for (let i = 0; i < MAX_FILAS; i++) {
  jugada[i] = Math.floor(Math.random() * frutas.length);
  console.log(frutas[jugada[i]]);
}

for (let i = 0; i < jugada.length; i++) {
  const fruta = jugada[i];
  repeticiones[fruta] = repeticiones[fruta] + 1;
}
console.log(repeticiones);
let premio = 0;
for (let i = 0; i < repeticiones.length; i++) {
  if (repeticiones[i] > 1) {
    premio = premio + apuesta * (repeticiones[i] - 1);
  }
  console.log(premio);
}
console.log(apuesta, premio);
// console.log(jugada1, frutas[jugada1]);
// console.log(jugada2, frutas[jugada2]);
// console.log(jugada3, frutas[jugada3]);
// const apuesta = Math.floor(Math.random() * MAX_APUESTA) + 1;
// console.log(apuesta);

// let premio = 0;
// if (jugada1 === jugada2 && jugada2 === jugada3) {
//   premio = apuesta * PREMIO_123;
// } else if (jugada1 === jugada2) {
//   premio = apuesta * PREMIO_12;
// } else if (jugada2 === jugada3) {
//   premio = apuesta * PREMIO_23;
// } else if (jugada1 === jugada3) {
//   premio = apuesta * PREMIO_13;
// }
// console.log(
//   "apuesta:",
//   apuesta,
//   "jugada:",
//   frutas[jugada1],
//   frutas[jugada2],
//   frutas[jugada3],
//   "premio:",
//   premio
// );

// const random = Math.random();
// console.log(random);
// const proporcion = random * 10;
// console.log(proporcion);
// const redondeo = Math.floor(proporcion);
// console.log(redondeo)
// const apuesta = redondeo + 1;
