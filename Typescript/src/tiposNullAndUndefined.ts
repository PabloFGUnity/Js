let nulo: null = null
let indefinido: undefined = undefined

function pediCafe ( tipo: string | null) {
    let cafe = "";
    if (tipo) {
        cafe = `${tipo}`
    } else {
        cafe = "Ninguno"
    }
    console.log(cafe);
}

pediCafe(null)


function pedirCafe2 (tipo: string ) {
    let cafe = "null";
    cafe = tipo?.concat() || "Ninugno";
    console.log(cafe);
}


pedirCafe2("solo")