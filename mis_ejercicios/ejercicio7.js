const prompt = require("prompt-sync")({ sigint: true });

let a=Number(prompt("Da un precio para un producto: "));
let b=Number(prompt("Cuando dinero tienes para pagar: "));

if (a < b)
{
    console.log(`Esta es su vuelta ${b-a}`);
}   else
    {
        console.log(`No tienes suficente dinero para pagar`);
    }

