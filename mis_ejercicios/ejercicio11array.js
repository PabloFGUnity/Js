const prompt = require("prompt-sync")({ sigint: true });

const compra=Number(prompt(`Dame cuanto dinero vas a gastar: `))
const condicion=[0,500,1000,7000,150000];
const descuentos=[0,5,10,20,25];
let descuento;


for (let i=0; i<condicion.length; i++)
{
    console.log(
    `condición ${i} y dinero ${condicion[i]} y descuento es ${descuentos[i]}`
    );

    if (compra<= condicion[i] && !descuento)
    {
        descuento= descuentos[i - 1];
        console.log(`Este es el descuento ${descuentos[i - 1]}`);
    }

}

console.log(`Tienes un descuento de ${descuento}.
 El precio final es: ${compra - (compra*descuento) / 100}`);