//index.html -- /user
// detalles.html -- /user/:id


function inic (numeroPagina)
{
    console.log("onLoad se ha llamado");

    
    let numUsuarios=10;
    
    const promesa=fetch(`https://dummyapi.io/data/v1/user?page=${numeroPagina}&limit=${numUsuarios}`,{
        headers:{
            "app-id":"6470d08eb1f4a63742e47f6e"
        }}
    )

    promesa
    .then((result)=> result.json())
    .then((response) => { 

        Registro(response);

        console.log(response);
        console.log(response.data);
        
        Paginas(response);
        
    })
    .catch((error)=> console.log(error))
}


function Registro (response){
    this.response = response;
    this.render = function() {
        let divUsers = document.getElementById ("usersList");
        divUsers.innerHTML = "";
        for (const user of this.response)
        {
            divUsers.innerHTML += `<li><img src= "${user.picture}"> ${user.title} ${user.firstName} ${user.lastName}</li>`
            divUsers.innerHTML += "<li><a href='usuarios.html?id=" + user.id + "'>Info</a></li>";
        };
    };
};

function Paginas (response){
    this.response = response;
    this.render = function (){
        let pageDiv = document.getElementById("page");
        let numPaginas = response.total / response.limit;
        pageDiv.innerHTML = "";
        for (let i = 1; i < numPaginas; i++){
            pageDiv.innerHTML +=  `<a href="#" onclick= "inic(${i})">${i}</a>`
        };
    };
};