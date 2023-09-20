const pokemonsOl = document.querySelector('#pokemonsOl');

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="pokemon-number">#0001</span>
            <h2 class="pokemon-name">${pokemon.name}</h2>

            <div class="pokemon-detail">
                <ol class="pokemon-types">
                    <li class="pokemon-type">Grass</li>
                    <li class="pokemon-type">Poison</li>
                </ol>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" 
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

pokeApi.getPokemons().then((pokemonsList) => {
    
    pokemonsList.forEach((pokemon) => {
        const li = document.createElement('li');
        li.innerHTML = convertPokemonToLi(pokemon);
        pokemonsOl.appendChild(li);
    })

})