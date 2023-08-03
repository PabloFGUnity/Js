// const miArray = [1, 2, 3, 4, 5];

function reverse(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[array.length - i - 1] = array[i];
  }
  return result;
}

console.log(reverse([1, 2, 3, 4, 5]));
