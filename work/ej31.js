// El siguiente es el menú de un restaurante de bocadillos.
// Diseñar un algoritmo capaz de leer el número
// de unidades consumidas de cada alimento ordenado y calcular la cuenta total.
// PRODUCTO PRECIO
// Bocadillo de jamón 3,5
// Cerveza 2,5
// Refresco 2,0
// Pan 0,65
const prompt = require("prompt-sync")();
const menu = [
  { nombre: "bocataJamon", precio: 3.5 },
  { nombre: "cerveza", precio: 2.5 },
  { nombre: "refresco", precio: 2 },
  { nombre: "pan", precio: 0.65 },
];

let cuentaNueva;
do {
  cuentaNueva = prompt("?Quieres una nueva cuenta (S/N)?: ");
  if (cuentaNueva === "S") {
    console.log(`Tu total es ${calcularCuenta(menu)}`);
  }
} while (cuentaNueva === "S");

function calcularCuenta(productos) {
  let cuenta = 0;
  for (const producto of productos) {
    cuenta += pedirProducto(producto);
  }
  return cuenta;
}
function pedirProducto(producto) {
  const cantidad = Number(prompt(`Cantidad de ${producto.nombre}`));
  return cantidad * producto.precio;
}
