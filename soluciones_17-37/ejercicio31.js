const prompt = require("prompt-sync")({ sigint: true });

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  importe(cantidad) {
    return this.precio * cantidad;

// function Producto (nombre, precio) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.importe = function (cantidad) {
//     return this.precio * cantidad;
//   }
// }

const productos = [ 
  new Producto('Bocadillo de jamón',3.5),
  new Producto('Cerveza',2.5),  
  new Producto('Refresco',3.5),
  new Producto('Pan',0.65),
];

let cuenta;
do {
  cuenta = calcularCuenta();
  console.log(`La cuenta es ${cuenta}`);
} while (cuenta !== 0);

function calcularCuenta() {
  let cuenta = 0;
  for (const producto of productos) {
    let numero = Number(prompt(`Introduce número de ${producto.nombre}: `));
    if (!isNaN(numero)) {
      cuenta += producto.precio * numero;
    }
  }
  return cuenta;
}
