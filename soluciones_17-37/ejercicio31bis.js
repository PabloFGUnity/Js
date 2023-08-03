const prompt = require("prompt-sync")({ sigint: true });

const productos = [
  { nombre: "Bocadillo de jamón", precio: 3.5 },
  { nombre: "Cerveza", precio: 2.5 },
  { nombre: "Refresco", precio: 3.5 },
  { nombre: "Pan", precio: 0.65 },
];

let cuenta;
do {
  cuenta = () => calcularCuenta();
  console.log(`La cuenta es ${cuenta}`);
} while (cuenta !== 0);

const calcularCuenta = function () {
  let cuenta = 0;
  for (const producto of productos) {
    let numero = Number(prompt(`Introduce número de ${producto.nombre}: `));
    if (!isNaN(numero)) {
      cuenta += producto.precio * numero;
    }
  }
  return cuenta;
};
