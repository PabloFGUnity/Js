const matriz=["A","B","C","D","N","HOLA"];

function mapeo(array,callback)
{
    const result=[];
    for (let i=0;i<array.length;i++)
    {
        result.push(callback(array[i],i,array));
    }
    return result
}

console.log(mapeo(matriz,(item,pos) => (pos%2===0) ?  item : '1' + item));

