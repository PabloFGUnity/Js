console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);
let a = 0.1 + 0.2;
a = a.toFixed(2);
console.log(a);
console.log(a == 0.3);

const persona = {
  nombre: "Juan",
  fechaNacimiento: 19790801,
  "color de ojos": "azul",
  edad: function () {
    let hoy = new Date();
    let anio = hoy.getFullYear();
    let mes = hoy.getMonth() + 1;
    let dia = hoy.getDate();
    let fechaActual = anio * 10000 + mes * 100 + dia;
    let edad = (fechaActual - this.fechaNacimiento) / 10000;
    return edad;
  },
};

console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona);
let propiedad = "nombre";
console.log(persona[propiedad]);
propiedad = "color de ojos";
console.log(persona[propiedad]);

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
