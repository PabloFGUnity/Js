const prompt = require("prompt-sync")({ sigint: true });

let a = Number(prompt("Introduce la variable A: "));
let b = Number(prompt("Introduce la variable B: "));
let c = Number(prompt("Introduce la variable C: "));

if (a < 0)
{
    console.log("El producto es $(a*b*c)");
} else 
    {
        console.log("La suma es",a+b+c);
    }