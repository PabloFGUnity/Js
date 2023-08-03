function sumaPositivosAsync (a,b)
{
    let p= new Promise(function(resolve,reject)
    {
        if (a>= 0 && b>=0)
        {
            resolve(a+b);
         }  else
            {
                reject("Los números no son positivos");
            }
    });
    return p;
};

console.log("Empieza");

sumaPositivosAsync(5,10)
    .then(ok)
    .catch(error);

console.log("Segunda llamada");

sumaPositivosAsync(5,-10)
    .then(ok)
    .catch(error);

console.log("Termina");

function ok (suma)
{
    console.log(`La suma es ${suma}`);
}

function error (textoError)
{
    console.log(`Error: ${textoError}`);
}