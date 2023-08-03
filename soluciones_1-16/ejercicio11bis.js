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

const amount = Number(prompt("Introduce la cantidad de la compra: "));

const cantidad = [500, 1000, 7000, 15000];
const descuento = [5, 10, 20, 25];

if (amount < 500) {
  discount = 0;
} else if (amount <= 1000) {
  discount = 0.05;
} else if (amount <= 7000) {
  discount = 0.1;
} else if (amount <= 15000) {
  discount = 0.2;
} else {
  discount = 0.25;
}
totalAmount = amount * (1 - discount);
console.log(
  `Tienes un ${discount}% de descuento. El total a pagar es: ${totalAmount}`
);
