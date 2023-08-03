/* 
23. Leer tres números que denoten una fecha (día, mes, año).
Comprobar que es una fecha válida. Si no es válida escribir un mensaje de error y volver a pedir los números.
Si es válida escribir la fecha cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, 
se deberá imprimir “1 de febrero de 2006”.
El año debe ser mayor que 0. (Recuerda la estructura switch).
*/

const prompt = require("prompt-sync")({ sigint: true });

const meses=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DEC"];
const dias=[31,28,31,30,31,30,31,31,30,31,30,31];

let dia;
let mes;
let anio;

do{
    if(dia || mes || anio)
    {
        console.log("Fecha erronea");
    }

    dia=prompt(`Dame un día: `);
    mes=prompt(`Dame un mes: `);
    anio=prompt(`Dame un anio: `);

}   while(!validarFecha(dia,mes,anio))

console.log(validarFecha(dia,mes,anio));

function validarFecha(diaf,mesf,aniof)
{
    let mesindicado=mes;
    if (mesindicado)

}