/*Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas)
correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:
¿En qué mes se registró el mayor coste de producción de dulces?
Promedio anual de los costes de producción de bebidas.
¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste?
¿Cuál fue el que tuvo menor coste de producción en diciembre?
*/
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const departamentos = ["Dulces", "Bebidas", "Conservas"];

const dulces = rellenarArray(meses.length);
const bebidas = rellenarArray(meses.length);
const conservas = rellenarArray(meses.length);

let maxDulces;
let avgBebidas = 0;
let maxBebidas;
let minBebidas;

for (let i = 0; i < meses.length; i++) {
  maxDulces = buscar(dulces[i], i, maxDulces, (a, b) =>
    a.cantidad > b.cantidad ? a : b
  );
  maxBebidas = buscar(bebidas[i], i, maxBebidas, (a, b) =>
    a.cantidad > b.cantidad ? a : b
  );
  minBebidas = buscar(bebidas[i], i, minBebidas, (a, b) =>
    a.cantidad < b.cantidad ? a : b
  );
  avgBebidas += bebidas[i];
}
console.log(dulces);
console.log(bebidas);
console.log(conservas);
console.log(`Máximo dulces: ${meses[maxDulces.posicion]}`);
console.log(`Máximo bebidas: ${meses[maxBebidas.posicion]}`);
console.log(`Mínimo bebidas: ${meses[minBebidas.posicion]}`);
console.log(`Promedio bebidas: ${(avgBebidas / bebidas.length).toFixed(2)}`);
let minDep;
const array = [dulces[11], bebidas[11], conservas[11]];
for (let i = 0; i < array.length; i++) {
  minDep = buscar(array[i], i, minDep, (a, b) =>
    a.cantidad < b.cantidad ? a : b
  );
}
console.log(`Mínimo coste en diciembre: ${departamentos[minDep.posicion]}`);

function buscar(newItem, posicion, anterior, seleccion) {
  let actual = {
    cantidad: newItem,
    posicion: posicion,
  };
  return anterior ? seleccion(actual, anterior) : actual;
}

function rellenarArray(cantidad) {
  const resultado = [];
  for (let i = 0; i < cantidad; i++) {
    resultado.push(Math.floor(Math.random() * 100000) + 20000);
  }
  return resultado;
}
