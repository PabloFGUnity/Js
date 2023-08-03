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

        const valortag = window.location.search;
        console.log(valortag);
        const urlParams = new URLSearchParams(valortag);
        let tagperro = urlParams.get('id');

        let url=`https://dummyapi.io/data/v1/tag/${tagperro}/post?page=${numPages}&limit=${numUsers}`;
        xhttp.open("GET",url,true);
        xhttp.setRequestHeader("app-id","6470d08eb1f4a63742e47f6e");
        xhttp.send();

};


function ListaUsers (contenido)
{
    this.contenido=contenido;
    this.render= function ()
    {
        let lista_users=document.getElementById("lista_tag");

        lista_users.innerHTML="";

        for (let i=0;i<contenido.length;i++)
        {
            lista_users.innerHTML+=`
            <li>
            <img src="${contenido[i].image}" width="100px" align="center"> <br>
            Likes: ${contenido[i].likes}<br>
            Dueño: ${contenido[i].owner.firstName} ${contenido[i].owner.lastName}<br>
            Date: ${contenido[i].publishDate}<br>
            
            <a href="${contenido[i].tags}">${contenido[i].tags}</a><br>
            Texto: ${contenido[i].text}<br><br>
            </li><br>`
        }
        // Hacer enlaces a estos también
        


        
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