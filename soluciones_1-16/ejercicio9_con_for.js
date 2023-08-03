/*
pedir por pantalla el número de notas a promediar y calcular la media
*/
const prompt = require("prompt-sync")({ sigint: true });

const numNotas = Number(prompt("Cuantas notas quieres promediar?:"));

if (isNaN(numNotas)) {
  console.error("No ha introducido un número");
} else {
  let suma = 0;
  for (let i = 0; i < numNotas; i++) {
    let nota = Number(prompt(`Dame la nota ${i + 1}:`));
    suma += nota; // suma = suma + nota;
  }
  const media = suma / numNotas;
  console.log(
    `El promedio es ${media}. Estás ${media >= 5 ? "Aprobado" : "Suspenso"}`
  );
}
