const prompt = require("prompt-sync")({ sigint: true });

let a=Number(prompt("Cuento cobras: "));

if (a < 1000)
{
    console.log(`Este es tu nuevo sueldo ${(a*0.15)+a}`);
}   else
    {
        console.log(`No tienes nuevo sueldo`);
    }