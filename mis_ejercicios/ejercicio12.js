const prompt = require("prompt-sync")({ sigint: true });
//T= temperatura en grados
//N = nmero de sonidos emitidos por minut0

let N= Number(prompt(`Dame el numero de sonido que emite el grillo por minuto:`));
let T = (N / 4) + 40;
if (N===0)
{
    console.log(`Error`);
} else
    {
        console.log(`Hace esta temperatura ${T}`);
    }
