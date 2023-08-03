const prompt = require("prompt-sync")({ sigint: true });

let a = Number(prompt("Introduce la variable A: "));

if (a < 0)
{
    console.log("Es negativo");
}   else if (a > 0)
    {
        console.log("Es positivo");
    }   else
        {
            console.log("Es nulo");
        }