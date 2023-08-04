/* 

0 === false
"" == false
false == false

*/

// ?? verifica si es undefined o null
// || verifica si no son falso los valores

function getCar(year:number, brand:string, amount?:number, stock?:boolean) {
    return {
        year,
        brand,
        amount: amount ?? 3,
        stock: stock ?? true
    }
}

let test= getCar(2000, "ford", 5, true)

let test2= getCar(2005, "ford")

let test3 = getCar(2000, "BMW", 0 , false )

console.log(test);

console.log(test2);

console.log(test3);