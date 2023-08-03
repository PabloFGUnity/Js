const prompt = require("prompt-sync")({ sigint: true });
const asignaturas = [
  { titulo: "prácticas", peso: 0.1 },
  { titulo: "problemas", peso: 0.5 },
  { titulo: "teoría", peso: 0.4 },
];

let alumno;
do {
  alumno = prompt("Nombre del alumno:");
  if (alumno) {
    const media = mediaNotas(asignaturas);
    console.log(`La nota final de ${alumno} es ${media.toFixed(2)}`);
  }
} while (alumno);

function mediaNotas(asignaturas) {
  let resultado = 0;
  for (const asignatura of asignaturas) {
    resultado += capturarNota(asignatura);
  }
  return resultado;
}

function capturarNota(asignatura) {
  let nota;
  do {
    nota = Number(prompt(`Nota de ${asignatura.titulo}:`));
    if (nota >= 0 && nota <= 10) {
      nota = nota * asignatura.peso;
    } else {
      console.log(`Introduzca una nota entre 0 y 10`);
    }
  } while (isNaN(nota) || nota < 0 || nota > 10);
  return nota;
}
