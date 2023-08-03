const jugadores = ["Antonio", "Pepe", "Luis", "Martín", "Lucas", "Rogelio"];

const manos = [];
let pareja1 = [];
let pareja2 = [];
let base1 = 0;
let incr1 = 1;
let base2 = 2;
for (let i = 0; i < jugadores.length; i++) {}

for (let i = 0; i < jugadores.length; i++) {
  for (let j = 0; j < jugadores.length; j++) {
    pareja1.push(base);
    if (j !== base) {
      pareja2.push(j);
    }
    base++;
    if ((base = jugadores.length)) base = 0;
  }
  console.log(pareja1);
  console.log(pareja2);
}

// manos.push(crearManos(pareja1, pareja2));

// function crearManos(pareja1, pareja2) {
//   const result = [];
//   for (let i = 0; i < pareja1.length; i++) {
//     for (let j = 0; j < pareja2.length; j++) {
//       if (i !== j)
//         result.push(`${jugadores[pareja1[i]]}, ${jugadores[pareja2[j]]}`);
//     }
//   }
//   return result;
// }
