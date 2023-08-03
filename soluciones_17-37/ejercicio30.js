const prompt = require("prompt-sync")();
let maximo = Number(prompt(`Introduce el número :`));

for (let linea = 0; linea < maximo; linea++) {
  console.log(imprimirBlancos(linea) + imprimirAsteriscos(maximo - linea));
}

function imprimirBlancos(cantidad) {
  let linea = "";
  for (let i = 0; i < cantidad; i++) {
    linea = linea + " ";
  }
  return linea;
}

function imprimirAsteriscos(cantidad) {
  let linea = "";
  for (let i = 0; i < cantidad; i++) {
    linea = linea + "*";
  }
  return linea;
}
