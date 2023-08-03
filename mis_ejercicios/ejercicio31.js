const prompt = require("prompt-sync") ({signint: true});

const menu= [

    {producto: 'Bocadillo de Jamón' , precio: 3.5},
    {producto: 'Cerveza' , precio: 2.5},
    {producto: 'Refresco' , precio: 2.0},
    {producto: 'Pan' , precio: 0.65},

];
let cuenta;

cuenta=prompt(`Quieres una cuenta (Si/No): `);

while (cuenta ===`Si`)
{
    
    if (cuenta ===`Si`)
    {
        console.log(`Tu cuenta es ${calcularCuenta(menu)}`);
    }

    cuenta=prompt(`Quieres una cuenta (Si/No): `);

}

function calcularCuenta(productos)
{
    let cuenta=0;
    for (const producto of productos)
    {
        cuenta += pedirProducto(producto);
        
    }
    return cuenta;
}

function pedirProducto(producto)
{
    const cantidad=Number(prompt(`Dime que cantidad quieres de ${producto.producto}: `));
    return cantidad * producto.precio;
}