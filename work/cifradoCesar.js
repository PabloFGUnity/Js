//cifrar Mi carro me lo robaron parametro de cifrado cesar 5
const mensaje = "Zoy";
const cifrado = cifrar(mensaje, 5);
const descifrado = cifrar(cifrado, -5);
console.assert(descifrado === mensaje, "Algo ha ido mal");
// console.assert(cifrar(cifrar(mensaje, 5), -5) === mensaje, "Algo ha ido mal");

function cifrar(mensaje, codigo) {
  let resultado = "";
  for (let i = 0; i < mensaje.length; i++) {
    resultado += cifrarLetra(mensaje[i], codigo);
  }
  console.log(resultado);
  return resultado;
}

function cifrarLetra(letra, codigo) {
  const alfabeto =
    " 0123456789abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
  // 0123456789012345678901234567890123456789012345678901234567890;
  let indice = alfabeto.indexOf(letra);
  if (indice < 0) {
    throw new Error(`Caracter ${letra} no permitido`);
  }
  indice += codigo;
  if (indice < 0) {
    indice += alfabeto.length;
  } else if (indice > alfabeto.length) {
    indice -= alfabeto.length;
  }
  return alfabeto.at(indice);
}
