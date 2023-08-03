const prompt = require("prompt-sync")({ sigint: true });

let galones=Number(prompt(`Dime una cantidad de gasolina: `));

let gasolina = 1.333*litros;
let galón = 3.78541 / 1.333;

console.log(`Esos litros en gasolina valen ${gasolina} y en galones ${galón}`);
