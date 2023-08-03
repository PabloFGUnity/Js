//
// Arrays
const array1 = [1, 2, 3, 4];
const [item1, item2, ...resto1] = array1;
console.log(item1, item2, resto1);

const array2 = array1;
// ... hace una copia elemento a elemento
const array3 = [...array1];
array1.push(5);
console.log(array1);
console.log(array2);
console.log(array3);

// Separación

function separar(item1, item2) {
  console.log(item1, item2);
}

// separar(...array1);
separar(1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 8, 98);

// Fusionar

const letras1 = ["a", "b"];
const letras2 = ["d", "e"];
const letras3 = [...letras1, "c", ...letras2];
console.log(letras3);
const [a, b, ...resto] = letras3;
console.log(a);
console.log(b);
console.log(resto);

const persona1 = {
  nombre: "antonio",
  edad: 18,
};
const persona2 = persona1;
const persona3 = { ...persona1 };
persona1.altura = 172;
console.log(persona1);
console.log(persona2);
console.log(persona3);

const obj1 = { item1: "abc", item2: 10 };
const obj2 = { item3: "xyz", item4: 20 };
const nuevoObjeto = { obj1, obj2 };
console.log(nuevoObjeto);
const otroNuevoObjeto = { ...obj1, ...obj2 };
console.log(otroNuevoObjeto);

function caso1(param1, param2, ...rest) {
  console.log(param1);
  console.log(param2);
  console.log(rest);
}
caso1(1, 2, 3, 4, 5, 6, 7);

// let name = persona1.nombre;
// let edad = persona1.edad;
let {nombre:name,edad} = persona1;
console.log(name, edad);
edad = 20;
console.log(edad,persona1)
