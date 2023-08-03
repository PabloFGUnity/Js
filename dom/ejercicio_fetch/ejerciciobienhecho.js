function init (paginaSeleccionada){
    let numUsuarios = 10;
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
    console.log(this.readyState);

        if (this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
            const usersData = JSON.parse(this.responseText);
            new Paginas (usersData).render();
            new Registro (usersData.data).render();
            console.log(usersData.data);
        };
    };
    let url = `https://dummyapi.io/data/v1/user?page=${paginaSeleccionada}&limit=${numUsuarios}`;
    http.open("GET", url, true );
    http.setRequestHeader ("app-id","6470d08eb1f4a63742e47f6e");
    http.send();
};

function Paginas (usersData){
    this.usersData = usersData;
    this.render = function (){
        let pageDiv = document.getElementById("page");
        let numPaginas = usersData.total / usersData.limit;
        pageDiv.innerHTML = "";
        for (let i = 1; i < numPaginas; i++){
            pageDiv.innerHTML +=  `<a href="#" onclick= "init(${i})">${i}</a>`
        };
    };
};

function Registro (usersData){
    this.usersData = usersData;
    this.render = function() {
        let divUsers = document.getElementById ("usersList");
        divUsers.innerHTML = "";
        for (const user of this.usersData){
            divUsers.innerHTML += `<li><img src= "${user.picture}"> ${user.title} ${user.firstName} ${user.lastName}</li>`
            divUsers.innerHTML += "<li><a href='usuarios.html?id=" + user.id + "'>Info</a></li>";
        };
    };
};