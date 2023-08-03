"use strict";
const array = ["pepe", "pepa"];
for (let nombre of array) {
  console.log(saludar(nombre));
}
let anahi = saludar("Anahí");
console.log(anahi);

console.log(saludar());

// function Persona(nombre) {
//   this.nombre = nombre;
//   this.saludar = function () {
//     console.log("Hola, soy " + this.nombre);
//   };
// }

// const p1 = new Persona('juan');
// const p2 = new Persona('Cristina');
// p1.saludar();
// p2.saludar();
// p1.nombre = 'Jose';
// p1.saludar();
// console.log(p1 instanceof Persona);
// p1.saludar = function () {
//   console.log('Hola, me llamo ' + this.nombre);
// }
// p1.saludar();
// p2.saludar();

function saludar(x) {
  console.log(x);
  return "Hola " + x;
}

let argumentoRef = [9, 10];
function referencia(parametro) {
  console.log(parametro);
  parametro[0] = 8;
  parametro.push(11);
  parametro = "abc";
  console.log(parametro);
}
referencia(argumentoRef);
console.log(argumentoRef);
argumentoRef = "abc";
console.log(argumentoRef);

// const numeros = [1, 4, 2, 9, 5];
// console.log(numeros.sort(descendente));

// function descendente(a, b) {
//   console.log(a, b);
//   return b > a;
// }

// function ascendente(a, b) {
//   console.log(a, b);
//   return a > b;
// }

function Burbuja(lista, orden) {
  let n = lista.length;

  console.log(lista); // Mostramos, por consola, la lista desordenada
  // Algoritmo de burbuja
  for (let k = 1; k < n; k++) {
    for (let i = 0; i < n - k; i++) {
      if (orden && orden(lista[i], lista[i + 1])) {
        const aux = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = aux;
      }
    }
  }
  console.log(lista);
  return lista; // Mostramos, por consola, la lista ya ordenada
}

// Burbuja(["c", "a", "b"], descendente);
// Burbuja(["c", "a", "b"], ascendente);
const ascendente = (a, b) => b > a;
const descendente = function (a, b) {
  return a > b;
};

function asc(a, b) {
  return b > a;
}
console.log(Burbuja(["c", "a", "b"], ascendente));
console.log(Burbuja(["c", "a", "b"], asc));

const saludo = (idioma) => (idioma === "Español" ? "hola" : "hello");

const temp = saludo("Español");

console.log(temp);
