"use strict";
// Ejercicio 11
// En una tienda efectúan un descuento a los clientes dependiendo
// de la cantidad de la compra. El descuento se basa en:

// Si el monto es menor que 500€ -> No hay descuento
// Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
// Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
// Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
// Más de 15.000€ -> 25% descuento

// Imprimir (Escribir) el precio final.

const prompt = require("prompt-sync")();

const cantidad = [
  { limite: 500, descuento: 5 },
  { limite: 1000, descuento: 10 },
  { limite: 7000, descuento: 20 },
  { limite: 15000, descuento: 25 },
];

for (let i = cantidad.length - 1; i >= 0; i--) {
  console.log(cantidad[i]);
}

let precio;
do {
  precio = Number(prompt("Dame precio (0 para terminar):"));
  if (!isNaN(precio)) {
    let descuento = calcularDescuento(precio);
    console.log(
      `el descuento de ${precio} es ${descuento}% y el resultado es ${
        (precio * (100 - descuento)) / 100
      }`
    );
  }
} while (precio != 0);

function calcularDescuento(valor) {
  let resultado = 0;
  for (let i = 0; i < cantidad.length; i++) {
    if (valor > cantidad[i].limite) {
      resultado = cantidad[i].descuento;
    }
  }
  return resultado;
}
