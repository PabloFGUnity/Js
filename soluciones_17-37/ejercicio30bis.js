const prompt = require("prompt-sync")();
let maximo = Number(prompt(`Introduce el número :`));

for (let linea=0; linea<maximo;linea++) {
    console.log(imprimir(linea," ")+imprimir(maximo-linea,"*"));
}

function imprimir (cantidad,caracter) {
    let linea = "";
    for (let i=0; i<cantidad; i++) {
        linea += caracter;
    }
    return linea;
}
