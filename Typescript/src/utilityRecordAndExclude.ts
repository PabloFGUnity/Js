//RECORD

const personas: Record <string, null> = {
    pepe:null
}

const energias: Record <string, number[]> = {
    solar: [231, 12, 21, 12, 13,123],
    eolica: [231, 12, 13,123,876, 8768, 867]
}

type NombresDePerro = "Bron" | "Poncho" | "Pilato";

interface IDog {
    age: number
    color: string
}

const perretes: Record<NombresDePerro, IDog> = {
    Bron: {age: 5, color:"Brown"},
    Poncho: {age: 2, color:"Purple"},
    Pilato: {age: 4, color:"Yellow"},
}

//EXCLUDE

type Primitivos = string | number | boolean | object;

const excluido: Exclude<Primitivos, object> = "string"