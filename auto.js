(function (nombre) {
  console.log("hola " + nombre);
})("Pepe");

const mapeo = (array, callback) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i));
  }
  return result;
};

function add1(item, pos) {
  return pos % 2 === 0 ? "1" + item : item;
}

// console.log(
//   mapeo(["a", "b", "c"], (item, pos) => (pos % 2 === 0 ? "1" + item : item))
// );
console.log(mapeo(["a", "b", "c"], add1));

const add2 = (item, pos) => {
  return pos % 2 === 0 ? "1" + item : item;
};

const array = [1, 2, 3, 4];
console.log(array.map(add1));
console.log(array.map((item, pos) => (pos % 2 === 0 ? "1" + item : item)));
