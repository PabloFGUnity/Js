const prompt = require("prompt-sync")({ sigint: true });

const incremento=[1.15,1.10,1.06,1.03];

let sueldo=Number(prompt('Dime tu sueldo: '));
let categoria=Number(prompt('Dime tu categoria (De 1 a 4): '));

if (categoria >=1 && categoria <= 4 && !isNaN(sueldo)) 
    {
        console.log(`El nuevo salario de la categoria ${categoria}
es ${sueldo * incremento[categoria-1].toFixed(2)}`);
    }