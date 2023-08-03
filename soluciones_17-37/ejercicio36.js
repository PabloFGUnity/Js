function isEqual(a, b) {
  console.assert(a, "la variable a es undefined");
  console.assert(b, "la variable b es undefined");
  if (!(a instanceof Array) || !Array.isArray(b) || a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

console.assert(!isEqual([1, 2, 3], ["1", 2, "3"]), "Test1: no son iguales");
console.assert(isEqual([1, 2, 3], [1, 2, 3]), "Test2: no son iguales");
console.assert(!isEqual([1, 2, 3], [1, 2, 3, 4]), "Test3: no son iguales");
console.assert(!isEqual([1, 2, 3], "abc"), "Test4: no son iguales");
// console.assert(isEqual([1, 2], undefined), "prueba");
