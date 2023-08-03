const prompt = require("prompt-sync")({ sigint: true });

let a = Number(prompt("Introduce la variable A: "));
let b = Number(prompt("Introduce la variable B: "));


if (isNaN(a))
{
    console.log("a no es un número");
}   else if (isNaN (b))
    {
        console.log("b no es un número");
    }   else
        {
            console.log(("La suma es:"), a+b);
            console.log(("La resta es:"), a-b);
            console.log(("La multiplicación es:"), a*b);
            console.log(("La división es:"), a/b);

        }
        
console.log("fin");


