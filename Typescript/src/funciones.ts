function sum (a:number, b:number) {
    return console.log(a +b);
}

sum(2, 3);

//funciones con parámetros opcionales
//los opcionales van al final

function sum2(a:number, b:number, c?:number) {
    return console.log(a + b + (c || 0));
}

sum2(2, 3, 6)
sum2(1, 7)

//funciones con parametros predeterminados
function sum3(a:number, b:number, c:number = 0) {
    return console.log(a + b + c);
}

sum3(2, 3, 96)
sum3(10, 4)

function potencia (valor:number, exponente:number = 10) {
   return console.log(valor ** exponente);
}

potencia(3)
potencia(3,5)