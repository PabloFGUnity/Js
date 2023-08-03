const prompt = require("prompt-sync")({ sigint: true });
let a;
do 
{
    ea=Number(prompt("Dime un número: "));
}

while (a===0)
{
    if  (a%2 === 0)
    {
        console.log(`${a} Es numero par`);
    }   else 
        {
            console.log(`${a} Es numero impar`); 
        }   
    
}

