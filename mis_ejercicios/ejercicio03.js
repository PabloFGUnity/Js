const prompt = require("prompt-sync")({ sigint: true });

let a = (prompt("Introduce la variable A: "));
let b = (prompt("Introduce la variable B: "));
let c = (prompt("Introduce la variable C: "));


if (a > b)
{
    console.log(a,"es el mayor");
}   else if  ( b > a)
    {
        console.log(b,"es el mayor");
    }   else
        {
            console.log("son iguales");
        }


if ((a > b) && (a > c) )
{
    console.log(a,"es el mayor");
}   else if ((b > a) && (b > c) )
    {
        console.log(`${b}es el mayor`);
    }   else if ( (c > a) && (c > b))
        {
            console.log(c,"es el mayor");
        }   else
            {
                console.log("son iguales");
            }

        















console.log("fin");