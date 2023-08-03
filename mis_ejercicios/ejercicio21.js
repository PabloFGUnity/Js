const prompt = require("prompt-sync") ({signint: true});

let numeros;
let mayor
const guardado=[];
do {

    numeros=Number(prompt("Dame un numero (0 para terminar)"));
    guardado.push(numeros)
    mayor=mayorNumero(guardado);
    console.log(mayor);
}   while(numeros!=0)


function mayorNumero (array)
{
    
    for (let i=0;i<array.lenght;i++)
    {
       if (a>b)
       {
            return a
       }else
       {
        return b
       }
    }
}

