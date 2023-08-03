const prompt = require("prompt-sync")();
const maxIter = 10;

for (let i=0; i<maxIter;i++) {
    let number = Number(prompt(`Introduce el número ${i+1}º:`));
    console.log (`El cubo de ${number} es ${number**3}`);
}
