// Ejercicio 23
// Leer tres números que denoten una fecha (día, mes, año).
// Comprobar que es una fecha válida. Si no es válida escribir
// un mensaje de error y volver a pedir los números. Si es válida,
// escribir la fecha cambiando el número del mes por su nombre.
// Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”.
// El año debe ser mayor que 0. (Recuerda la estructura switch).

const prompt = require("prompt-sync")();

let day = Number(prompt("Introduce el dia: "));
let month = Number(prompt("Introduce el mes: "));
let year = Number(prompt("Introduce el año: "));

while (
  day <= 0 ||
  day > 31 ||
  month <= 0 ||
  month > 12 ||
  year < 1 ||
  (day === 29 && month === 2 && year % 4 !== 0)
) {
  console.log("Has introducido mal alguna parte de la fecha");

  day = Number(prompt("Introduce el dia: "));
  month = Number(prompt("Introduce el mes: "));
  year = Number(prompt("Introduce el año: "));
}

let monthName = "";

switch (month) {
  case 1:
    monthName = "enero";
    break;
  case 2:
    monthName = "febrero";
    break;
  case 3:
    monthName = "marzo";
    break;
  case 4:
    monthName = "abril";
    break;
  case 5:
    monthName = "mayo";
    break;
  case 6:
    monthName = "junio";
    break;
  case 7:
    monthName = "julio";
    break;
  case 8:
    monthName = "agosto";
    break;
  case 9:
    monthName = "septiembre";
    break;
  case 10:
    monthName = "octubre";
    break;
  case 11:
    monthName = "noviembre";
    break;
  case 12:
    monthName = "diciembre";
    break;

  default:
    monthName = "invalid";
    break;
}

console.log(`${day} de ${monthName} del ${year}`);
