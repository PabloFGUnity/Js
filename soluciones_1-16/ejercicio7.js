// Ejercicio 7
// Construir un algoritmo que dado el coste de un artículo
// vendido y la cantidad de dinero entregado, calcule e
// imprima el cambio que se debe entregar al cliente.

const prompt = require("prompt-sync")();

const cost = Number(prompt("Introduce el coste del artículo: "));
const paidAmount = Number(prompt("Introduce el pago: "));

if (paidAmount < cost) {
  console.log("Pago insuficiente");
} else {
  const change = paidAmount - cost;
  console.log(`El cambio es ${change} €`);
}
