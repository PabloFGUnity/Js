// obtengo la etiqueta div del html
const root = document.getElementById("root");
console.log(root);
// declaro un array de objetos con el tema de la foto y el título en castellano
const temas = [
  { foto: "face", titulo: "cara" },
  { foto: "beach", titulo: "playa" },
  { foto: "bread", titulo: "pan" },
  { foto: "fruit", titulo: "fruta" },
  { foto: "car", titulo: "coche" },
  { foto: "dog", titulo: "perro" },
  { foto: "isle", titulo: "isla" },
  { foto: "beer", titulo: "cerveza" },
];
console.log(first);
// vacion el html interno del div root
root.innerHTML = "";
// itero por el array de fotos
for (let i = 0; i < temas.length; i++) {
  // obtengo un tema de foto aleatorio
  const tema = Math.floor(Math.random() * temas.length);
  // añado al html interno de root el html generado por la función generarDiv
  root.innerHTML += generarDiv(i, tema);
}
/*
   generar un div compuesto de una imagen y un párrafo
   posicion: posición de la foto
   tema: tema para obtener la foto en unsplash
*/
function generarDiv(posicion, tema) {
  const img = generarFoto(temas[tema].foto, posicion);
  const p = (
    <p>
      Foto ${posicion + 1}-${temas[tema].titulo}
    </p>
  );
  return `<div class="div-inline">${img + p}</div>`;
}
/*
   genera una etiqueta img pero cambiando la clase css si la posición es par o impar
*/
function generarFoto(tema, posicion) {
  let claseCss;
  if (posicion % 2 === 0) {
    let claseCss = "img-round1";
  } else {
    let claseCss = "img-round2";
  }
  return `<img class=${claseCss} 
  src="https://source.unsplash.com/random/500x500/?${tema}&sig=${posicion}" 
  alt="Foto de cara${posicion}"/>`;
}
