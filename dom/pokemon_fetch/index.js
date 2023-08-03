//index.html -- /user
// detalles.html -- /user/:id


function inic (numPaginas)
{
    console.log("onLoad se ha llamado");

    
    let numPokemons=10;
    
    const promesa=fetch(`https://pokeapi.co/api/v2/pokemon?offset=${numPaginas}&limit=${numPokemons}`)

    promesa
    .then((result)=> result.json()) 
    .then((response) => { 

        console.log(response);
        
        new Registro(response.results).render();

        // new Registro(response.limit).render();

        
    })
    .catch((error)=> console.log(error))
} 


function Registro (response){
    this.response = response;
    this.render = function() {
        let divPokemon = document.getElementById ("Pokemons");
        divPokemon.innerHTML = "";
        for (const pokemon of response)
        {
            divPokemon.innerHTML += `<li>Nombre:${pokemon.name}   Url:${pokemon.url} 

            <a href="detalle_pok.html?id=${pokemon.name}">Detalles de pokemon</a></li><br>`;


        };
    };
};

// function Paginas (response){
//     this.response = response;
//     this.render = function (){
//         let pageDiv = document.getElementById("page");
//         let numPaginas = response.total / response.limit;
//         pageDiv.innerHTML = "";
//         for (let i = 1; i < numPaginas; i++){
//             pageDiv.innerHTML +=  `<a href="#" onclick= "inic(${i})">${i}</a>`
//         };
//     };
// };