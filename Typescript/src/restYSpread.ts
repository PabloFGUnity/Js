(() => {
    //rest params

    function sum(...valores: number[]) {
        let suma = 0;
        for (let index = 0; index < valores.length; index++) {
            suma += valores[index];
            
        }
        return suma
    }

    function reduce(...valores: number[]) {
        
        let total = valores.reduce((acc, currentValue) => acc + currentValue, 0)

        return total
    }

    console.log(sum(2, 3, 5, 3, 1, 5, 5, 2, 6, 1, 4, 10));
    console.log(reduce(20, 3, 65, 3, 1, 5, 5, 2, 6, 1, 4, 10));



    //Spread operator

    function sum2(...valores: number[]) {
        
        let total = valores.reduce((acc, currentValue) => acc + currentValue, 0)

        return total
    }

    let args : number[]= [1, 3, 4, 6, 23, 12, 200]

    let result = sum2(...args)

    console.log(result);
})();