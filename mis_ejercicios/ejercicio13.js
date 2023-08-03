const prompt = require("prompt-sync")({ sigint: true });

let altura=Number(prompt(`Dame una altura en (m): `));
let base=Number(prompt(`Dame una base en (m): `));


console.log(`La superficie mide ${base*altura} y el perimetro mide ${2*(base+altura)}`);