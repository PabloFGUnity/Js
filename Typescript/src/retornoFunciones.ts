function calcularFechaMS () {
    return new Date().getTime();
}

//void se utiliza para las funciones que no devuelven nada es solo para actualizar

function obtenerFecha():void {
    console.log(calcularFechaMS());
}

obtenerFecha();