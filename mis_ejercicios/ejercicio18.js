const prompt = require("prompt-sync")({ sigint: true });
const array=[]
let par=0;
let base=0;

let N=Number(prompt('Dame un numero:'));

for (i=0;i<N;i++)
{
    if(N%2===0)
    {   
        par=N+2;
        console.log(array);
    }   
        

}

console.log(par);