interface ITecnologias {
    javascript?: string;
    webhook?: string;
    dto?: string;
    sql: string;
    api: string;
    logger: string;
    debbug: string;
    ruby: string;
    go: string;
}

// PARTIAL

interface LenguajeDeProgramacion extends Partial<ITecnologias> {}

type LenguajeProgramacion = Partial<ITecnologias>


const lenguajes: LenguajeDeProgramacion = {
    javascript: "Front",
    sql: "DataBase",
    ruby: "Back",
    go: "Back"
}

// REQUIRED

interface Lenguajes extends Required<ITecnologias> {}

type LenguajesRequeridos = Required<ITecnologias>

// const lenguajesBack: Lenguajes = {
//     javascript: "Front",
//     sql: "DataBase",
//     ruby: "Back",
//     go: "Back"
// }