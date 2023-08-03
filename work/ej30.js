const prompt = require("prompt-sync")({ sigint: true });

const numero = Number(prompt("dame la longitud"));
// let numero = 5;

for (let i = 0; i < numero; i++) {
  //   console.log(" ".repeat(i) + "*".repeat(numero - i));
  console.log(rellenar(" ", i) + rellenar("*", numero - i));
}

function rellenar(caracter, veces) {
  let resultado = "";
  for (let i = 0; i < veces; i++) {
    resultado += caracter;
  }
  return resultado;
}
