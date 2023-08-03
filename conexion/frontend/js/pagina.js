

function Menu(links) {
    // propiedades
    this.links = links,

    // metodos
    this.render = function() {
        let menuDiv = document.getElementById("menu");

        for (const link of this.links) {
            menuDiv.innerHTML += `<a href='${link.url}'>${link.etiqueta}</a> `;
        }
    }
}

function ListaUsuarios() {
    this.usuarios = [];

    this.render = function() {
        const divContainer = document.getElementById("container");
        divContainer.innerHTML = "<ul>";

        for (const usuario of this.usuarios) {
            divContainer.innerHTML += `<li>${usuario.nombre} - ${usuario.precio}</li>`;
        }

        divContainer.innerHTML = "</ul>";
    }

    this.loadFromApi = function() {
        const http = new XMLHttpRequest();
        http.onreadystatechange = function() {
            this.render();
        }
    }
}

function inicializar() {
    console.log("onload se ha llamado");

    window.addEventListener("beforeunload", function(event) {
        window.localStorage.set("currentPage", 0);
    });

    //const localStorage = window.localStorage;
    let usuario = {email: "email", password: "1234"};
    //localStorage.setItem("usuario", JSON.stringify(usuario));

    // render menu
    const menu = new Menu([{url: "index.html", etiqueta: "Home"}, 
            {url: "login.html", etiqueta: "Login"},
            {url: "registro.html", etiqueta: "Registro"}])
    menu.render();

    // render usuarios
    new ListaUsuarios(usuarios).render();
}