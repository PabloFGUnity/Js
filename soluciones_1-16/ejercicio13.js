/**
 * Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el perímetro y la superficie del mismo.
        Superficie= base*altura
        Perímetro = 2*(base + altura)
    Comprobar los resultados con varios datos de entradas diferentes.
 */

const prompt = require("prompt-sync")();

const altura = Number(prompt("Introduce la altura del rectangulo: "));
const base = Number(prompt("Introduce la base del rectangulo: "));

if (altura > 0 && base > 0) {
  console.log("La superficie del rectangulo es: ", base * altura);
  console.log("El perimetro del rectangulo es: ", 2 * (base + altura));
}
