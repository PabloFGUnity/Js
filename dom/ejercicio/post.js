function inic(numPages)
{
    console.log("onLoad llamado");

    let numUsers=10;
    const xhttp= new XMLHttpRequest();

    xhttp.onreadystatechange = function ()
    {
        console.log(this.readyState);
        if(this.readyState === 4 && this.status === 200)
        {   
            console.log(this.responseText);
            const contenido=JSON.parse(this.responseText);
            new Pagination(contenido).render();
            new ListaUsers(contenido.data).render();
            console.log(contenido.data);
        };
   
    };

        let url=`https://dummyapi.io/data/v1/post?page=${numPages}&limit=${numUsers}`;
        xhttp.open("GET",url,true);
        xhttp.setRequestHeader("app-id","6470d08eb1f4a63742e47f6e");
        xhttp.send();

};


function ListaUsers (contenido)
{
    this.contenido=contenido;
    this.render= function ()
    {
        let lista_users=document.getElementById("lista_post");
        
        lista_users.innerHTML="";
        
        for (const item of this.contenido)
        {
            lista_users.innerHTML +=`
            <li><img src="${item.image}" width="100px" align="center"></li>
            
             <li>${item.likes}</li> 
             <li>${item.text}</li>
             <li>${item.publishDate}</li>
             <li>${item.owner.title} ${item.owner.firstName} ${item.owner.lastName}</li>
             <li><img src="${item.owner.picture}" width="100px" align="center"</li>
             <li><a href="usuarios.html?id=${item.owner.id}">Detalles de persona</a></li>`;
            for (const tag of item.tags)
            {
                lista_users.innerHTML+=`
                <li><a href="tag.html?id=${tag}">${tag}</a></li>
                `
            }
            lista_users.innerHTML+="<br><br>"
        };
    };
};

function Pagination (contenido)
{
    this.contenido=contenido;
    this.render= function ()
    {
        let pagination=document.getElementById("paginacion");
        let total=(contenido.total/contenido.limit);

        pagination.innerHTML="";

        for (let i=1;i<total;i++)
        {
            pagination.innerHTML+=` <a href="#" onclick="inic(${i})">${i}, </a>`
        }
    }
}