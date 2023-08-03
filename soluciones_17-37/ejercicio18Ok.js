"use strict";
const prompt = require("prompt-sync")({ sigint: true });

const numero = Number(prompt("Dame el número:"));

let suma = 0;
let base = numero % 2 === 0 ? numero : numero + 1;

for (let i = 0; i < numero; i++) {
  console.log(base);
  suma += base;
  base += 2;
}
console.log(`la suma es ${suma}`);
