// Generar un array de 20 elementos con números aleatorios no repetidos entre si.

const matriz=[];
const MAX=100;
let aleatorio;
let longitud=20;
while(matriz.length<longitud)
{
    aleatorio=Math.floor(Math.random() * MAX);
    if (!buscar_numero(aleatorio,matriz))
    {
        matriz.push(aleatorio);
    }
    
}

console.table(matriz);
console.log(matriz);


 function buscar_numero(aleatorio,matriz)
{   
    
    for (let i=0;i<matriz.length;i++)
    {
        if(matriz[i]===aleatorio)
        {
            return true
        }

    }
    return false
    
} 