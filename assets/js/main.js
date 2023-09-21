const pokemonsOl = document.querySelector('#pokemonsOl');

function convertPokemonTypeToList(pokemonTypes) {
    return pokemonTypes.map((typeSlot) => {
        return `
            <li class="pokemon-type">${typeSlot.type.name}</li>
            `
    })
}

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="pokemon-number">#000${pokemon.order}</span>
            <h2 class="pokemon-name">${pokemon.name}</h2>

            <div class="pokemon-detail">
                <ol class="pokemon-types">
                    ${convertPokemonTypeToList(pokemon.types).join("")}
                </ol>
                <img src="${pokemon.sprites.other.dream_world.front_default}" 
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