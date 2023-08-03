const prompt = require("prompt-sync")({ sigint: true });
const array=[]
let result=0;

let N=Number(prompt('Dame un numero:'));

for (i=0;i<N;i++)
{

    result=result+i;
    array.push; 
}

console.log(result);