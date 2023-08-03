function filtrar(array, criterio) {
  const result = [];
  for (const item of array) {
    if (criterio(item)) {
      result.push(item);
    }
  }
  return result;
}

// function mayorQue3(valor) {
//   return valor > 3;
// }

// console.log(filtrar([1, 2, 3, 4, 5, 6], mayorQue3));

console.log(filtrar([1, 2, 3, 4, 5, 6], (valor) => valor > 3));
function todo() {
  return true;
}
console.log(filtrar([1, 6, 7, 6, 8, 8, 8, 9], todo));

console.log(
  [1, 2, 3, 4, 5, 6].filter((item) => item % 2 === 0).reduce((x, y) => x + y)
);
const array1 = [1, 2, 3];
const array2 = new Array(1, 2, 3);
const numero = new Number(1.239494949494);
console.log(numero.toFixed(2));
console.log(array1);
console.log(array2);
