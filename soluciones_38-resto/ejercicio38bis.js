const MAX_ITEMS = 20;

const include = function (array, value) {
  for (const item of array) {
    if (value === item) return true;
  }
  return false;
};

const array = [];
while (array.length < MAX_ITEMS) {
  let value = Math.floor(Math.random() * MAX_ITEMS) + 1;
  if (!include(array, value)) {
    array.push(value);
  }
}
console.table(array);
