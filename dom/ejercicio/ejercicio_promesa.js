//index.html -- /user
// detalles.html -- /user/:id


function inic (numeroPagina)
{
    console.log("onLoad se ha llamado");

    
    let numUsuarios=10;
    let error;
    let xhttp = new XMLHttpRequest();  
    
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


    let url=`https://dummyapi.io/data/v1/user?page=${numeroPagina}&limit=${numUsuarios}`;

    xhttp.open("GET",url,true);
    xhttp.setRequestHeader("app-id","6470d08eb1f4a63742e47f6e")
    xhttp.send();
}

function sustituirLista(response)
{
    this.response=response;
    console.log(response);
    let contenido=JSON.parse(response);
    let listaDiv= document.getElementById("lista_users");
     

        listaDiv.innerHTML+= "<ul>"

        listaDiv.innerHTML+= "<li>Foto, Titulo, Nombre, Apellido</li>"

        
        for (const item of contenido.data)
        {
          
            listaDiv.innerHTML +=`<li><img src="${item.picture}" width="100px" align="center"> ${item.title} ${item.firstName} ${item.lastName}
            <a href="usuarios.html?id=${item.id}">Detalles de persona</a></li>`;
            
        }  
        
        listaDiv.innerHTML+="</ul>"

        let total=(contenido.total/contenido.limit).toFixed(0);
        let paginaDiv= document.getElementById("paginacion");
        paginaDiv.innerHTML="";
        for (let i=1; i<total;i++)
        {
            paginaDiv.innerHTML+= `<a href="#"   onclick="init(${i})" >${i}, </a>`
        }
  
};





