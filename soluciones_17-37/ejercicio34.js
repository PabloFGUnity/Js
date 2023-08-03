/*Crear dos arrays de números enteros de longitud 10 rellenos 
con números aleatorios del 1 al 20. Imprimir índice y el 
resultado de la multiplicación de ambos elementos de los arrays 
del índice de cada iteración. Cuidado con los elementos 
del array sin inicializar.*/

const array1 = [];
const array2 = [];
for (let i = 0; i < 10; i++) {
  array1[i] = Math.floor(Math.random() * 20) + 1;
  array2[i] = Math.floor(Math.random() * 20) + 1;
}

for (let i = 0; i < array1.length; i++) {
  console.log(`el resultado de la posición ${i} es ${array1[i] * array2[i]}`);
}
