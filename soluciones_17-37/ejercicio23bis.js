const prompt = require("prompt-sync")({ sigint: true });

let nombreMes = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let day;
let month;
let year;
do {
  if (day || month || year) {
    console.log("fecha errónea");
  }
  day = Number(prompt("Introduce el dia: "));
  month = Number(prompt("Introduce el mes: "));
  year = Number(prompt("Introduce el año: "));
} while (!fechaValida(day, month, year));
console.log(`La fecha es ${day} de ${nombreMes[month - 1]} de ${year}`);

function fechaValida(dia, mes, anio) {
  const dias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let diasMes;
  if (anio < 0 || anio >= 3000 || mes < 1 || mes > 12 || dia < 1) {
    return false;
  }

  if (mes === 2 && anio % 4 === 0 && (anio % 100 !== 0 || anio % 400 === 0)) {
    diasMes = 29;
  } else {
    diasMes = dias[mes - 1];
  }
  if (dia > diasMes) {
    return false;
  }
  return true;
}
