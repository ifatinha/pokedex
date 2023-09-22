const pokemonsOl = document.querySelector('#pokemonsOl');

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.mainType}">
            <span class="pokemon-number">#000${pokemon.order}</span>
            <h2 class="pokemon-name">${pokemon.name}</h2>

            <div class="pokemon-detail">
                <ol class="pokemon-types">
                    ${pokemon.types.map((type) => { return `<li class="pokemon-type ${type}">${type}</li>`}).join("")}
                </ol>
                <img src="${pokemon.image}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

pokeApi.getPokemons().then((pokemonsList = []) => {
    pokemonsOl.innerHTML = pokemonsList.map((pokemon) => {
        return convertPokemonToLi(pokemon);
    }).join("");
})