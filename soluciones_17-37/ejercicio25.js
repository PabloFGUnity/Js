const prompt = require("prompt-sync")({ sigint: true });

const max = Number(prompt("Tamaño del lado:"));

for (let i = 0; i < max; i++) {
  console.log(imprimir_linea(i));
}

/*
    Función que imprime una linea rellena de asteriscos si es la primera 
    o la última. Si son lineas centrales, el primer y ultimo caracter son 
    asteriscos y los del centro son en blanco.
*/
function imprimir_linea(num_linea) {
  if (num_linea === 0 || num_linea === max - 1) {
    return rellenar_linea("a", "a");
  } else {
    return rellenar_linea("a", "b");
  }
}

function rellenar_linea(extremo, central) {
  let linea = "";
  for (let i = 0; i < max; i++) {
    if (i === 0 || i === max - 1) {
      linea += extremo;
    } else {
      linea += central;
    }
  }
  return linea;
}
