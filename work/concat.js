const array = [1, 2, 3];

function concat(array1, array2) {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    array3.push(array2[i]);
  }
  return array3;
}

function pop(array) {
  let last = array[array.length - 1];
  array.length = array.length - 1;
  return last;
}

console.log(pop(array));
console.log(array);
console.log(concat(array, [4, 5, 6]));

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let item of array) {
  console.log(item);
}

function imprimir(item, index) {
  console.log(item);
  console.log(index);
  // console.log(array);
}
array.forEach((item) => {
  console.log(item);
});
//array.forEach (imprimir);

function forEach(array, funcion) {
  for (let i = 0; i < array.length; i++) {
    funcion(array[i], i, array);
  }
}

forEach(array, imprimir);

console.log(array.map((item) => item * 2));

function map(array, funcion) {
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
    array2.push(funcion(array[i], i, array));
  }
  return array2;
}

console.log(map(array, (item) => item * 2));
