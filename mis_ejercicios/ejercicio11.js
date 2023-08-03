const prompt = require("prompt-sync")({ sigint: true });

let dinero = Number(prompt(`Dime cuanto dinero vas a gastar: `));
let descuento=1;
if (dinero < 500)
{
    console.log(`No hay descuento`);

}   else if ((dinero >= 500) && (dinero <=1000))
    {
          descuento= 0.05
    }    else if ((dinero > 1000) && (dinero <=7000))
        {
            descuento= 0.10  
        }   else if ((dinero > 7000) && (dinero <= 15000))
            {
                descuento= 0.20
            }   
                else if (dinero > 15000)
                {
                    descuento= 0.25
                }  

 let final=dinero*descuento;

console.log(`Para tu cantidad de dinero ${dinero} te corresponde este descuento ${descuento} 
por lo que quedaría así el precio final ${dinero-final}`);