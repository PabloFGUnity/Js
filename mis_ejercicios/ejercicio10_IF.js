const prompt = require("prompt-sync")({ sigint: true });

let sueldo = Number(prompt(`Dime tu sueldo: `));
let categoria= Number(prompt(`Dime tu categoria (1 al 4): `));
let incremento=1;
if (categoria===1)
{
     incremento=1.15
}   else if (categoria===2)
    {
          incremento= 1.10
    }    else if (categoria===3)
        {
            incremento= 1.06   
        }   else if (categoria===4)
            {
                incremento= 1.03
            }   else
                {
                    console.log(`Categoría incorrecta`);
                }

console.log(`Para tu categoria ${categoria} y tu sueldo ${sueldo} te corresponde este nuevo 
sueldo ${sueldo*incremento}`);