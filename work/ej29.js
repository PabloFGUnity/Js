// function factorial(n) {
//   console.log(n)
//   let resultado = (n!==1) ? n * factorial(n - 1): 1;
//   console.log(resultado);
//   return resultado;
// }

function factorial(n) {
  return n !== 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(7));
