const alfabeto =
  " 0123456789abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ";

// pedir mensaje
const mensaje = "ZOY DE ALMERIA";
const codigo = -5;
// pedir codigo
// console.assert(
//   cifrar(cifrar(mensaje, codigo), -codigo) === mensaje,
//   "No cifra bien"
// );
console.log(cifrar(cifrar(mensaje, codigo), -codigo));
// console.log(cifrar('TJSU', -codigo));

function cifrar(mensaje, codigo) {
  let resultado = "";
  for (let i = 0; i < mensaje.length; i++) {
    resultado += cifrarLetra(mensaje[i], codigo);
  }
  return resultado;
}

function cifrarLetra(letra, codigo) {
  let posicion = alfabeto.indexOf(letra) + codigo;
  console.log(posicion);
  if (posicion >= alfabeto.length) {
    posicion -= alfabeto.length;
  }
  if (posicion < 0) {
    posicion = alfabeto.length + posicion;
  }
  //   console.log(alfabeto.length);
  console.log(posicion);
  return alfabeto.at(posicion);
}
