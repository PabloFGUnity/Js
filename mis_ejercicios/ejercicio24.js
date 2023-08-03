const prompt = require("prompt-sync") ({signint: true});

const alumno=[
    {nombre: "Prácticas" , valor:0.10},
    {nombre: "Problemas" , valor:0.50},
    {nombre: "Teórica" , valor:0.40},
];

let nombre;
do {
    nombre=prompt("Dime el nombre del alumno: ");
    if (nombre)
    {
        notas(valor,alumno);
    }
}while(nombre)

function notas (valor)
{
    let notas;
    let total=0;
    do {
        notas=Number(prompt(`Dame una nota ${alumno.nombre}`))
        total=notas * alumno.valor
    }while (notas<0 || notas>10)

    return total;
}