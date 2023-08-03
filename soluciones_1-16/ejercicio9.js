// Ejercicio 9
// Construir un algoritmo que dado como datos 5 calificaciones de un alumno imprima
// el promedio y la palabra “aprobado” si el alumno tiene un promedio mayor o igual
// que 5, y la palabra “no aprobado” en caso contrario.

const prompt = require("prompt-sync")();

const calificacion1 = Number(prompt("Introduce calificación 1: "));
const calificacion2 = Number(prompt("Introduce calificación 2: "));
const calificacion3 = Number(prompt("Introduce calificación 3: "));
const calificacion4 = Number(prompt("Introduce calificación 4: "));
const calificacion5 = Number(prompt("Introduce calificación 5: "));

if (
  isNaN(calificacion1) ||
  isNaN(calificacion2) ||
  isNaN(calificacion3) ||
  isNaN(calificacion4) ||
  isNaN(calificacion5)
) {
  console.log("Debes introducir sólo números. Inténtalo de nuevo");
} else {
  const promedio =
    (calificacion1 +
      calificacion2 +
      calificacion3 +
      calificacion4 +
      calificacion5) /
    5;

  if (promedio >= 5) {
    console.log("Estás aprobado con un", promedio);
  } else {
    console.log("Estás suspenso con un", promedio);
  }
}
