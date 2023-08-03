  const prompt = require("prompt-sync")();
// un array de asignaturas donde mantener relacionada cada asignatura con su peso
const asignaturas = [
  { nombre: "Práctica", peso: 10 },
  { nombre: "Teórica", peso: 40 },
  { nombre: "Problemas", peso: 50 },
];

// declaro fuera del bucle el nombre, ya que lo tengo que usar tanto dentro del
// bloque do while como en la condición.
// Por cada nombre capturado se llama a la función calcular notas
let nombre;

do {
  nombre = prompt("Introduce el nombre: ");
  if (nombre) {
    calculaNotas(nombre, asignaturas);
  }
} while (nombre);

// esta función recibe el nombre del alumno para poder mostrarlo al finalizar
// itera en el array de asignaturas solicitándo la nota de cada asignatura.
// la función pedir nota, solicita la nota y la devuelve ponderada por su peso
function calculaNotas(alumno, arrayAsignaturas) {
  let nota = 0;
  for (const asignatura of arrayAsignaturas) {
    nota += pedir_nota(asignatura);
  }
  console.log(`La nota de ${alumno} es ${nota}`);
}
// Controla que la nota esté entre 0 y 10 y devuelve el valor ponderado
function pedir_nota(asignatura) {
  let valor;
  do {
    if (valor) {
      console.log("La nota debe estar comprendida entre 0 y 10");
    }
    valor = Number(prompt(`Introduce la nota de ${asignatura?.nombre}:`));
  } while (valor < 0 || valor > 10);

  return (valor * asignatura.peso) / 100;
}
