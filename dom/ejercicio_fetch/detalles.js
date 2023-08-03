function inic ()
{
    console.log("onLoad se ha llamado");
    let xhttp = new XMLHttpRequest();  
    let error;
  

    xhttp.onreadystatechange = function()
    {
        let state=this.readyState;
        let status=this.status;
        let response=this.responseText;
                            // Son funciones resolve y reject 
        promesa = new Promise (function(resolve,reject)
        {

            if (state == 4 && status == 200) 
            {
               // document.getElementById("demo").innerHTML = text;
               resolve(response); 

            }   else (state == 4)
                {
                    reject("Error");
                }
        });

        promesa.then(sustituirLista).catch(error)
    };

    const valorId = window.location.search;
    console.log(valorId);
    const urlParams = new URLSearchParams(valorId);
    let idPersona = urlParams.get('id');

    let url=`https://dummyapi.io/data/v1/user/${idPersona}`;
    xhttp.open("GET",url,true);
    xhttp.setRequestHeader("app-id","6470d08eb1f4a63742e47f6e")
    xhttp.send();
}

function sustituirLista(response)
{
    console.log(response);
    let contenido=JSON.parse(response);
    let listaDiv= document.getElementById("lista_users");


        listaDiv.innerHTML= `<b>Datos Persona</b><br>
                            <ul>
                                <li><img src="${contenido.picture}" width align="center"></li>
                                <li>${contenido.title} ${contenido.firstName} ${contenido.lastName}</li>
                                <li>Género:${contenido.gender}</li>
                                <li>Email:${contenido.email}</li>
                                <li>Birthday:${contenido.dateOfBirth}</li>
                                <li>Phone:${contenido.phone}</li>
                                <li>Location:</li>
                                <ul>
                                <li>${contenido.location.street}</li>
                                <li>${contenido.location.state}</li>
                                <li>${contenido.location.country}</li>
                                <li>${contenido.location.timezone}</li>
                                </ul>
                                <li>Register:${contenido.registerDate}</li>
                                <li>Update:${contenido.updatedDate}</li>
                            </ul>
                                `

         


    
        
};