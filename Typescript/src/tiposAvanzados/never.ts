const  buzzLightYear = () => {
    while (true) {
        console.log("Hasta el infinito y mas alla ");
    }
};

const error = (error: string) => {
    throw new Error(error)
};

const cosasQueEstudiar = (cosasQUeEstudiar: any) => {
    if (typeof cosasQUeEstudiar === "string") {
        return "Me parece estupendo";
    } else if (Array.isArray(cosasQUeEstudiar)) {
        return "Dale caña"
    }

    return error("Eso no me parece adecuado")
}

console.log(cosasQueEstudiar("Typescript"));
console.log(cosasQueEstudiar([3213,2312,3213,1,321]));
console.log(cosasQueEstudiar(true));
console.log(cosasQueEstudiar("Hasta luego"));