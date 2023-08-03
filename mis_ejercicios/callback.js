const matriz=["A","B","C","D","N","HOLA"];

function mapeo(array,callback)
{
    const result=[];
    for (const item of array)
    {
        result.push(callback(item,indice));
    }
    return result
}

function minuscula(item)
{
    return item.toLowerCase();
}


console.log(mapeo(matriz,minuscula));
console.log(mapeo(matriz,(item)=> item.toLowerCase() ));
console.log(mapeo(matriz,(item)=> '1' + item.toLowerCase() ));