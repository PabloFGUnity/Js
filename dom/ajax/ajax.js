function inicializar(){
    console.log("onload se ha llamado");
    // Instancia a la clase XML...
const http = new XMLHttpRequest();
// Método
// onreadystatechange
http.onreadystatechange = function(){
    // Nos está sacando 1,2,3,4
    console.log(this.readyState);
    // readystate es el estado del pedido
    if(this.readyState === 4 && this.status === 200){
        // imprimir por consola un array de entries
        console.log(this.responseText);
        const entradas = JSON.parse(this.responseText);
        new ListaEntradas(entradas.entries).render();
        }
}
http.open("GET", "https://api.publicapis.org/entries");
http.send();
    }
console.log(this.responseText);
function ListaEntradas(entradas){
    this.entradas = entradas;
    this.render = function(){
        let listaDiv = document.getElementById("lista");
        listaDiv.innerHTML = "<ol>";
        for(const entrada of this.entradas){
        listaDiv.innerHTML += `<li> ${entrada.API} ${entrada.Description}  ${entrada.Category} </li>`;
        }
        listaDiv.innerHTML +=  "</ol>";
    }
};