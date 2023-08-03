function inic ()
{
    console.log("onLoad se ha llamado");


    const valorId = window.location.search;
    console.log(valorId);
    const urlParams = new URLSearchParams(valorId);
    let idPokemon = urlParams.get('id');

    const promesa=fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)

    promesa
    .then((result)=> result.json()) 
    .then((response) => { 

        console.log(response);
        
        new Registro(response).render();


        
    })
    .catch((error)=> console.log(error))

    
}

function Registro (response){
    this.response = response;
    this.render = function() {
        let divPokemon = document.getElementById ("lista_pok");
        divPokemon.innerHTML = "";
        

        divPokemon.innerHTML+= `
        <img src="${response.sprites.back_default}">
        <img src="${response.sprites.front_default}">
        <img src="${response.sprites.back_shiny}">
        <img src="${response.sprites.front_shiny}">
        <br>
        <li>Nombre: ${response.forms[0].name}</li>
        <li>Base de experiencia: ${response.base_experience}</li>
        <li>Habilidades:
        <ul>
            <li>${response.abilities[0].ability.name}</li>
            <li>${response.abilities[1].is_hidden}</li>
        </ul>
        </li>
        <li>Altura:${response.height}</li>
        <li>Sitios para capturarlo: ${response.location_area_encounters}</li>
        `;

        

        
    };
};

         


    