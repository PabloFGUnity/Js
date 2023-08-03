const prompt = require("prompt-sync")({ sigint: true });
let numNotas = 0;
let nota = 0;
let suma = 0;
do {
  nota = Number(prompt(`Dame la nota ${numNotas + 1} (-1 para terminar):`));
  if (!isNaN(nota) && nota > -1) {
    suma = suma + nota; // suma += nota;
    numNotas++; // i = i + 1;
  }
} while (nota !== -1);
const media = suma / numNotas;
console.log(`La media es ${media}`);
