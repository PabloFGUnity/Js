const manzana = {
  nombre: "manzana",
  clase: "golden",
};

console.log(manzana);

manzana.precio = 4.5;

console.log(manzana);

const melon = {
  nombre: "melon",
  clase: "sapo",
};

const cantidad = 5;

// console.log(cantidad * frutas[1].precio);

function Fruta(nombre, clase, precio) {
  this.nombre = nombre;
  this.clase = clase;
  this.precio = precio;
  this.total = function (cantidad) {
    return cantidad * this.precio;
  };
}

class ClaseFruta {
  constructor(nombre, clase, precio) {
    this.nombre = nombre;
    this.clase = clase;
    this.precio = precio;
  }

  total(cantidad) {
    return cantidad * this.precio;
  }
}

const platano = new Fruta("platano", "canarias", 3.4);
const platano2 = new ClaseFruta("banana", "brasil", 2.3);
console.log(platano2);
console.log(platano2.total(5));

const frutas = [
  new Fruta("manzana", "golden", 4.5),
  new Fruta("melon", "sapo", 1.5),
];

console.log(frutas);

console.log(frutas[1].total(5));

const fruta2 = new Fruta();
console.log(fruta2);
fruta2.nombre = "limón";
fruta2.clase = "verde";
fruta2.precio = 2.5;
fruta2.pelar = function (pelado) {
  console.log("se pela así:" + pelado);
};
console.log(fruta2);
fruta2.pelar("cortando la piel");

const array = [1, 2, 3, 4];
const array2 = array.filter((x) => x > 2).map((x) => x * 2);

console.log(array2);
