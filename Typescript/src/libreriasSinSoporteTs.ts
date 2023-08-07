import jquery from 'jquery';
import _ from 'lodash'

// jquery.ajax()

const arrayDeNumeros1 = [3.3, 5.3, 6.7]
const arrayDeNumeros2 = ["one", "two", "three"]


// console.log(_.groupBy(arrayDeNumeros1))
// console.log(_.groupBy(arrayDeNumeros2))


const lenguajes = [
    {
        nombre: "JS",
        ruta: "Front"
    },
    {
        nombre: "TS",
        ruta: "Front"
    },
    {
        nombre: "php",
        ruta: "Back"
    },
    {
        nombre: "python",
        ruta: "Back"
    }
]

type Lenguaje = {
    nombre: string;
    ruta: string;
}

interface LenguajeAgrupados extends Record<string, Lenguaje[]> {}

const lenguajesAgrupados: LenguajeAgrupados = _.groupBy(
    lenguajes,
    (lenguaje) => lenguaje.ruta
)

console.log(lenguajesAgrupados)
