const prompt = require("prompt-sync")({ sigint: true });

const max = Number(prompt("Tamaño:"));

for (let i = 0; i < max; i++) {
  let linea;
  if (i === 0 || i === max - 1) {
    linea = imprimirLinea("*", "*", max);
  } else {
    linea = imprimirLinea("*", " ", max);
  }
  console.log(linea);
  // console.log (imprimirLinea (i,max));
}

function imprimirLinea(extremo, central, max) {
  let linea = "";
  for (let i = 0; i < max; i++) {
    if (i == 0 || i == max - 1) {
      linea += extremo;
    } else {
      linea += central;
    }
  }
  return linea;
}
