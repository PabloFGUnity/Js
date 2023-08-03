let nombre = "Pepe";
let sexo = "m";

switch (sexo) {
  case "v":
    nombre = "Sr. " + nombre;
    break;
  case "m":
    nombre = "Sra. " + nombre;
    break;
  default:
    nombre = "Sx. " + nombre;
}
console.log(nombre);

if (sexo === "v") {
  nombre = "Sr. " + nombre;
} else if (sexo === "m") {
  nombre = "Sra. " + nombre;
} else {
  nombre = "Sx. " + nombre;
}
let i = 0;
const tema = [10, 20, 30, 40];
for (;;) {
  console.log(tema[i]);
  i++;
  if (i >= tema.length) break;
}
console.log(i);

for (let i = tema.length - 1; i >= 0; i--) {
  console.log(i, tema[i]);
}

const matriz = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(i);
    console.log(j);
  }
}

const random = Math.random();
console.log(random);
const escala = random * tema.length;
console.log(escala);
const redondeo = Math.floor(escala);
console.log(redondeo);
console.log(tema[redondeo]);

// hace una array de 3 elementos con numeros entre 0 y 5
const miMatriz = [];
const MAXNUM = 1000000;
const MAXITEMS = 3;

for (let i = 0; i < MAXITEMS; i++) {
  miMatriz[i] = [];
  for (let j = 0; j < MAXITEMS; j++) {
    miMatriz[i][j] = Math.floor(Math.random() * MAXNUM);
  }
}
console.log(miMatriz);
