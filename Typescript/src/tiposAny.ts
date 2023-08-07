let cualquierCosa : any;

cualquierCosa = "Typescript"
cualquierCosa = "JavaScript"
cualquierCosa = null
cualquierCosa = undefined
cualquierCosa = 12321312
cualquierCosa = {}

cualquierCosa = "La imaginacion es la facultad del descubrimiento"
console.log((cualquierCosa as string).toUpperCase());

cualquierCosa = 3432432432.43243242
console.log((<number>cualquierCosa).toFixed(2));