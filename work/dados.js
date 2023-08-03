const TIRADAS = 10000;

function calcularTiradas() {
  function tirarDados() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    console.log(dado1, dado2);
    return dado1 + dado2;
  }
  const veces = [];
  for (let i = 0; i < 11; i++) {
    veces[i] = 0;
  }
  for (let i = 0; i < TIRADAS; i++) {
    const tirada = tirarDados() - 2;
    // if (!veces[tirada]) veces[tirada] = 0;
    veces[tirada]++;
  }
  console.log(veces);
  console.log(veces.length);
  return veces;
}

function obtenerMaximoyMinimo(veces) {
  let maximo = null;
  let minimo = null;

  for (let i = 0; i < veces.length; i++) {
    if (veces[i]) {
      if (maximo === null || veces[i] > veces[maximo]) {
        maximo = i;
        console.log("maximo", maximo);
      }
      if (minimo === null || veces[i] < veces[minimo]) {
        minimo = i;
        console.log("minimo", minimo);
      }
    }
  }
  console.log(maximo + 2);
  console.log(minimo + 2);
}

obtenerMaximoyMinimo(calcularTiradas());
