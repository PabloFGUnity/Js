// Ejercicio 24
// Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno
// se calcula según el siguiente criterio: la parte práctica vale el 10%; la parte
// de problemas vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre
// del alumno, las tres notas, escribirá el resultado y volverá a pedir los datos
// del siguiente alumno hasta que el nombre sea una cadena vacía. Las notas deben
// estar entre 0 y 10, si no lo están, no imprimirá las notas, mostrará un mensaje
// de error y volverá a pedir otro alumno.

const prompt = require("prompt-sync")();

let name;

do {
  name = prompt("Introduce otro nombre de alumno: ");
  let exercisesMark = Number(prompt("Introduce la nota practica: "));
  let problemsMark = Number(prompt("Introduce la nota de los problemas: "));
  let theoryMark = Number(prompt("Introduce la nota teorica: "));

  if (
    exercisesMark < 0 ||
    exercisesMark > 10 ||
    problemsMark < 0 ||
    problemsMark > 10 ||
    theoryMark < 0 ||
    theoryMark > 10
  ) {
    console.log("Ha habido un error con tus notas. Deben estar entre 1 y 10");
  } else {
    const finalMark =
      exercisesMark * 0.1 + problemsMark * 0.5 + theoryMark * 0.4;
    console.log(`Tu nota final es de ${finalMark} sobre 10`);
  }
} while (name);
