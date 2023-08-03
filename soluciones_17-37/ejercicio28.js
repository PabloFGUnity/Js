/*Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta
atrás se introducirá por teclado. Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.
• Investigar cómo hacer los intervalos en JS*/
const prompt = require("prompt-sync")({ sigint: true });

let numero = Number(prompt("Intervalo: "));
let interval;
if (!isNaN(numero)) {
  interval = setInterval(ring, numero * 1000);
}

function ring() {
  console.log("¡¡Ring!!");
  clearInterval(interval);
}
