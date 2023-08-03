// Ejercicio 20
// Teniendo en cuenta que la clave es “eureka”, escribir un
// algoritmo que nos pida una clave. Solo tenemos 3 intentos
// para acertar, si fallamos los 3 intentos nos mostrara un
// mensaje indicándonos que hemos agotado esos 3 intentos.
// Si acertamos la clave, saldremos directamente del programa.

const prompt = require("prompt-sync")();
const clave = "eureka";
const INTENTOS = 3;

let password;

// for (let i=0; i<INTENTOS; i++) {
//   password = prompt("Vuelve a introducir la contraseña: ");
//   if (password === clave)
//     break;
// }

let intentos = 0;
do {
  password = prompt("Vuelve a introducir la contraseña: ");
  intentos++;
} while (intentos < INTENTOS && password !== clave);

if (password === clave) {
  console.log("Contraseña correcta");
} else {
  console.log("Te has equivocado mas de 3 veces, vete a pastar");
}
// do {
//   password = prompt("Introduce la contraseña: ");
//   tries++;
// } while (password !== clave && tries < 3);
// while (password !== clave && tries < 3) {
//   // mientras que el password no sea "eureka" y hagas menos de 3 intentos repite
//   password = prompt("Vuelve a introducir la contraseña: ");
//   tries++;
// }

//mensaje para cuando acierte y otro para cuando se equivoque mas de 3 veces
