const prompt = require("prompt-sync")({ sigint: true });
const NUMNOTAS = 6;
const APROBADO = 4;

let numNotas = 0;
let suma = 0;

do {
  let nota = Number(prompt(`Introduce la nota ${numNotas + 1}: `));
  if (nota >= 1 && nota <= 10) {
    suma += nota;
    numNotas++;
  } else if (nota === 0) {
    break;
  } else {
    console.log("Nota no válida");
  }
} while (numNotas < NUMNOTAS);

if (numNotas === NUMNOTAS) {
  let media = suma / numNotas;
  if (media < APROBADO) {
    console.log(`Has suspendido con una nota media de ${media}`);
  } else {
    console.log(`Has aprobado con una nota media de ${media}`);
  }
}
