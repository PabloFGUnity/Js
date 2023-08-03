/*
   Crear un juego de tragaperras que genere una jugada calculando tres combinaciones 
   de frutas de un total de 5 frutas diferentes.
   Además en cada jugada se calculará una apuesta de un valor entre 1 y 10.
   El premio será un múltipo de la apuesta juegada cuando ocurran cualquiera de estas 
   combinaciones:
   x1 si coinciden la fruta 1 y 3
   x3 si coinciden la fruta 2 y 3
   x5 si coinciden la fruta 1 y 2
   x7 si coinciden la fruta 1, 2 y 3
*/
// Definimos un array con las frutas, el cual usaremos para elegir jugada
const frutas = ["🍏", "🍐", "🍊", "🍋", "🍌"];
// max apuesta que se podrá juagar
const MAX_APUESTA = 10;
// constantes para combinaciones de premios
const PREMIO_12 = 5; // 1 y 2 segunda fruta iguales x5
const PREMIO_123 = 7; // 1, 2 y 3 fruta iguales x7
const PREMIO_13 = 1; // 1 y 3 fruta iguales x1
const PREMIO_23 = 3; // 2 y 3 fruta iguales x3
// usamos Math.random() para obtener un número entre 0 y 0,99999999
// al multiplicarlo por la longitud del array de frutas
// obtenemos un número entre 0 y 4,999999999
// con Math.floor para obtener el número entero menor al número que se le pasa
// como parámetro. Es decir, para Math.floor(4.99999999) devuelve 4.
const jugada1 = Math.floor(Math.random() * frutas.length);
const jugada2 = Math.floor(Math.random() * frutas.length);
const jugada3 = Math.floor(Math.random() * frutas.length);
console.log(jugada1, frutas[jugada1]);
console.log(jugada2, frutas[jugada2]);
console.log(jugada3, frutas[jugada3]);
// obtiene un valor de apuesta entre 1 y 10. Si no sumaramos el 1 al final,
// obtendría un número entre 0 y 9.
const apuesta = Math.floor(Math.random() * MAX_APUESTA) + 1;
console.log(apuesta);

let premio = 0; // inicializamos premio 0
// primero evaluamos la más restrictiva para evitar salir
// por 12, 23 o 13, ya que para 123 se cumple cualquiera de las otras
if (jugada1 === jugada2 && jugada2 === jugada3) {
  premio = PREMIO_123; // obtenemos el premio multiplicando apuesta por
} else if (jugada1 === jugada2) {
  // la constante que corresponda
  premio = PREMIO_12;
} else if (jugada2 === jugada3) {
  premio = PREMIO_23;
} else if (jugada1 === jugada3) {
  premio = PREMIO_13;
}
premio = premio * apuesta;
console.log(
  "apuesta:",
  apuesta,
  "jugada:",
  frutas[jugada1],
  frutas[jugada2],
  frutas[jugada3],
  "premio:",
  premio
);

// const random = Math.random();
// console.log(random);
// const proporcion = random * 10;
// console.log(proporcion);
// const redondeo = Math.floor(proporcion);
// console.log(redondeo)
// const apuesta = redondeo + 1;
