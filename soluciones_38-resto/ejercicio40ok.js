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
/*Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas)
correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:
¿En qué mes se registró el mayor coste de producción de dulces?
Promedio anual de los costes de producción de bebidas.
¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor coste?
¿Cuál fue el que tuvo menor coste de producción en diciembre?
*/

function rellenarArray(longitud) {
  const result = [];
  for (let i = 0; i < longitud; i++) {
    result.push(Math.floor(Math.random() * 100000) + 30000);
  }
  return result;
}

let dulces = rellenarArray(meses.length);
let bebidas = rellenarArray(meses.length);
let conservas = rellenarArray(meses.length);

let mayorDulces = dulces[0]; //valor de enero
let mesMayorDulces = 0; // enero
for (let i = 1; i < dulces.length; i++) {
  if (dulces[i] > mayorDulces) {
    mayorDulces = dulces[i];
    mesMayorDulces = i;
  }
}
console.log(
  `El mes de ${meses[mesMayorDulces]} tuvo el mayor coste de producción de dulces`
);

let suma = 0;
for (let mes of bebidas) {
  suma += mes;
}
console.log(
  `El promedio anual de los costes de producción de bebidas es ${
    suma / bebidas.length
  }`
);

let mayorBebidas = bebidas[0];
let mesMayorBebidas = 0;
let menorBebidas = bebidas[0];
let mesMenorBebidas = 0;
for (let i = 1; i < bebidas.length; i++) {
  if (bebidas[i] > mayorBebidas) {
    mayorBebidas = bebidas[i];
    mesMayorBebidas = i;
  }
  if (bebidas[i] < menorBebidas) {
    menorBebidas = bebidas[i];
    mesMenorBebidas = i;
  }
}
console.log(
  `El mes de ${meses[mesMayorBebidas]} tuvo el mayor coste de producción de bebidas`
);
console.log(
  `El mes de ${meses[mesMenorBebidas]} tuvo el menor coste de producción de bebidas`
);

if (dulces[11] <= bebidas[11] && dulces[11] <= conservas[11]) {
  console.log(
    `El mes de diciembre tuvo el menor coste de producción en dulces`
  );
} else if (bebidas[11] <= dulces[11] && bebidas[11] <= conservas[11]) {
  console.log(
    `El mes de diciembre tuvo el menor coste de producción en bebidas`
  );
} else {
  console.log(
    `El mes de diciembre tuvo el menor coste de producción en conservas`
  );
}
