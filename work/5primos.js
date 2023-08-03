// const esPrimo = (x) => {
// const esPrimo = function (x) {
const NUMPRIMOS = 5;
const MAXRANGO = 1000000;

function esPrimo(numero) {
  console.log(numero);
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

let resultado = [];
let veces = 0;
while (resultado.length < NUMPRIMOS) {
  let numero = Math.floor(Math.random() * MAXRANGO);
  veces++;
  if (esPrimo(numero)) {
    // resultado.push(numero);
    resultado[resultado.length] = numero;
  }
}
console.log(veces);
console.log(resultado);
