const prompt = require("prompt-sync")({ sigint: true });
const NUMNOTAS=5;
let numnotas=0;
let suma=0;

do 
{
   let nota=Number(prompt(`Dame una nota`));
   if ((nota >=1) && (nota <=10))
   {
        suma += nota;
        numnotas ++;
   } else if (isNaN(nota))
        {
            break
        }   else 
            {
                console.log(`Nota no válida`);
            }

}   while (numnotas < NUMNOTAS);

if (NUMNOTAS === 5) 
{
    let media= suma / numnotas;
    console.log(`Has suspendido ${media}`);
}   else   
    {
        console.log(`Has aprobado con ${media}`)
    }


const prompt = require("prompt-sync")({ sigint: true });
let i=0;
let a=0;
let result=0;
do 
{
    a=Number(prompt(`Dame nota ${i+1} y (-1 para terminar) `));
    if (!isNaN(a) && a>-1)
    {   result= result + a;
        i++;
    }
} while (a !== -1);
const media=result/i;
console.log(`la media es ${media}`);
    

