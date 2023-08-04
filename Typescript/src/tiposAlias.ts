(() => {

    type Nombre = string | number;

    function name(nombre: Nombre) {
        return nombre
    }

    type Year = number;
    type Marca = string;
    type Modelo = string;
    
    type Car = {
        year: Year
        marca: Marca
        modelo: Modelo
    }

    const carYear : Year = 2005;
    const marca : Marca = "Citroen";
    const modelo : Modelo = "C4";

    const miPrimerCoche: Car = {
        year: carYear,
        marca,
        modelo
    }

    console.log(miPrimerCoche);
})();