const prompt = require("prompt-sync")();
let maximo = Number(prompt(`Introduce el número :`));

for (let i = 0; i < maximo; i++) {
  let linea = "";
  for (let j = 0; j < i; j++) {
    linea += " ";
  }
  for (let j = 0; j < maximo - i; j++) {
    linea += "*";
  }
  console.log(linea);
}

for (let i = 0; i < maximo; i++) {
  console.log(construirLinea(i, maximo));
}
function construirLinea(i, maximo) {
  let resultado = cacholinea(" ", i);
  resultado += cacholinea("*", maximo - i);
  return resultado;
}

function cacholinea(caracter, longitud) {
  let resultado = "";
  for (let i = 0; i < longitud; i++) {
    resultado += caracter;
  }
  return resultado;
}
