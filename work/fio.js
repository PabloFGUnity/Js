// El siguiente es el menú de un restaurante de bocadillos. Diseñar un algoritmo capaz de leer el número
// de unidades consumidas de cada alimento ordenado y calcular la cuenta total.
// PRODUCTO PRECIO
// Bocadillo de jamón 3,5
// Cerveza 2,5
// Refresco 2,0
// Pan 0,65*/
"use strict";
const prompt = require("prompt-sync")({ sigint: true });
//const altura = Number(prompt('Ingresa el valor de altura: '));

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.total = function (cantidad) {
    return cantidad * this.precio;
  };
}
const productos = [
  new Producto("bocadillo de jamón", 3.5),
  new Producto("cerveza", 2.5),
  new Producto("refresco", 2.0),
  new Producto("pan", 0.65),
];

let cuenta;
do {
  cuenta = prompt("Quieres una nueva cuenta s/n: ");
  if (cuenta === "s") {
    console.log(`La cuenta es ${sumaTotal(productos)}`);
  }
} while (cuenta === "s");

function sumaTotal(arrayProductos) {
  // funcion para sumar las cantidades de los producto
  let sum = 0;
  for (const producto of arrayProductos) {
    sum += pedirProducto(producto);
  }
  return sum;
}

function pedirProducto(producto) {
  let cantidad;
  do {
    cantidad = Number(prompt(`Cuantos ${producto.nombre} desea: `));
  } while (cantidad < 0 || isNaN(cantidad));
  return producto.total(cantidad);
}
