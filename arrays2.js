function indexOf(array, valor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      return i;
    }
  }
  return -1;
}
function push(array, item) {
  array[array.length] = item;
  return array.length;
}

const array = [1, 2, 3];
array[array.length] = 0;
console.log(array);

console.log(indexOf([1, 2, 3, 4], 3));

console.log(array);
console.log(Math.min(...array));
console.log(Math.max(...array));
