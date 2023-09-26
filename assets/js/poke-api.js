const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => { return response.json() })
        .then((jsonBody) => { return jsonBody.results })
        .then((pokemons) => { return pokemons.map(pokeApi.getPokemonDetail) })
        .then((detailRequests) => { return Promise.all(detailRequests); })
        .then((pokemonDetails) => { return pokemonDetails })
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())
        .then(convertPokemonApiDetailToPokemon);
}

function convertPokemonApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.name = pokeDetail.name;
    pokemon.order = pokeDetail.id;
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default;
    pokemon.types = pokeDetail.types.map((typeSlod) => { return typeSlod.type.name });
    pokemon.mainType = pokemon.types[0];

    return pokemon;
}

/*** modal detail pokemo ***/

pokeApi.getPokemonId = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((response) => { return response.json() })
        .then((pokemon) => { return createFullPokemonObject(pokemon) })
}

function createFullPokemonObject(pokemon) {
    const fullPokemon = new FullPokemon();
    fullPokemon.name = pokemon.name;
    fullPokemon.height = pokemon.height;
    fullPokemon.weight = pokemon.weight;
    fullPokemon.experience = pokemon.base_experience;
    fullPokemon.abilities = pokemon.abilities.map((abilityName) => { return abilityName.ability.name });
    fullPokemon.types = pokemon.types.map((typeSlod) => { return typeSlod.type.name });
    fullPokemon.mainType = pokemon.types[0];
    fullPokemon.order = pokemon.order;
    fullPokemon.img = pokemon.sprites.other.dream_world.front_default;
    // fullPokemon.group = getDetailsPokemon('egg-group', pokemon.id);
    return fullPokemon;
}

pokeApi.pokemonDetail = (path, id) => {
    const url = `https://pokeapi.co/api/v2/${path}/${id}`;
    return fetch(url)
        .then((response) => { return response.json() })
        .then((pokemonDetail) => { return pokemonDetail })
};

const nameCategory = async (fullPokemon) => {
    return await pokeApi.pokemonDetail('egg-group', 1);
}

// pokeApi.getPokemonId(1).then((fullPokemon) => {
//     console.log(fullPokemon);
// });

// console.log(nameCategory());