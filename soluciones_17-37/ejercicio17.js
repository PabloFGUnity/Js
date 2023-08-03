"use strict";
const prompt = require("prompt-sync")({ sigint: true });

const numero = Number(prompt("Dame el número:"));

const sumaEuler = (n) => (n * (n + 1)) / 2;

const sumaEuler2 = function (numero) {
  return (numero * (numero + 1)) / 2;
};

function sumaEuler3(numero) {
  return (numero * (numero + 1)) / 2;
}

const calcularSuma = function (n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
};

if (!isNaN(numero)) {
  let suma = calcularSuma(numero);
  suma = sumaEuler(numero);
  suma = sumaEuler2(numero);
  suma = sumaEuler3(numero);
  console.log(`la suma de los primeros ${numero} números es ${suma}`);
  console.assert(suma === sumaEuler(numero), "No funciona bien calcular suma");
}
