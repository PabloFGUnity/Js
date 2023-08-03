const prompt = require("prompt-sync")();

const cantidad = Number(prompt("Introduce la limites de la compra: "));

const limites = [0, 500, 1000, 7000, 15000];
const descuentos = [0, 5, 10, 20, 25];
let descuento;

for (let i = 0; i < limites.length; i++) {
  console.log(
    `iteracion ${i} y limite ${limites[i]} y descuento es ${descuentos[i]}`
  );
  if (cantidad <= limites[i] && !descuento) {
    descuento = descuentos[i - 1];
    console.log(`descuento seleccionado ${descuentos[i - 1]}`);
  }
}
console.log(
  `Tienes un ${descuento}% de descuento. El total a pagar es: ${
    cantidad - (cantidad * descuento) / 100
  }`
);
