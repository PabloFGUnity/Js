document.addEventListener("DOMContentLoaded", initialize);
// document.addEventListener("DOMContentLoaded", (evento) => initialize(evento));

function initialize() {
  // console.log(evento, par2, par3);
  document.getElementById("calcular").addEventListener("click", calcular);
  document.getElementById("numero").addEventListener("click", vaciar);
}

function vaciar() {
  document.getElementById("numero").value = "";
}

function calcular() {
  const num = document.getElementById("numero").value;
  document.getElementById(
    "out"
  ).innerHTML = `<h1>El factorial de ${num} es ${factorial(num)}</h1>`;
}

function factorial(numero) {
  return numero !== 1 ? numero * factorial(numero - 1) : 1;
}
