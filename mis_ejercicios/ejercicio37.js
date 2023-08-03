/* Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
    a) Obtenga cuántos números son mayores que 0.
    b) Calcule el promedio de los números positivos.
    c) Obtenga el promedio de todos los números */

const prompt = require("prompt-sync") ({signint: true});

const array=[];
const matriz=[];
const N=Number(prompt(`Dame un número: `));
let positivos=0;


const RANGO=100;

for (let i=0;i<N;i++)
{
    let añadir=Math.floor(Math.random(2) *(RANGO*2)) - RANGO;
    array.push(añadir);
}

console.log(array);

for (let i=0; i < array.lenght; i++)
    {
        if (array[i] > 0)
        {
            positivos++
            matriz.push(array[i] > 0)
        }
    }


console.log(matriz);
console.log(positivos);