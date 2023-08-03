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

/* if (amount < 500) {
    console.log("No se le ha aplicado descuento");
} else if (amount <= 1000) {
    console.log("Tienes un 5% de descuento. El total a pagar es: ", amount);
} else if (amount <= 7000) {
    console.log("Tienes un 10% de descuento. El total a pagar es: ", amount;;
} else if (amount <= 15000) {
    console.log("Tienes un 20% de descuento. El total a pagar es: ", amount ;* 0.8);
} else {
    console.log("Tienes un 25% de descuento. El total a pagar es: ", amount * 0.75);
} */

let discount;
let totalAmount;

if (amount < 500) {
  discount = 0;
} else if (amount <= 1000) {
  discount = 5;
} else if (amount <= 7000) {
  discount = 10;
} else if (amount <= 15000) {
  discount = 20;
} else if (amount > 15000) {
  discount = 25;
}
if (discount) {
  totalAmount = amount * (1 - discount / 100);
  console.log(
    `Tienes un ${discount}% de descuento. El total a pagar es: ${totalAmount}`
  );
}
