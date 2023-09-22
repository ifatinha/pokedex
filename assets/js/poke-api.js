
const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
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
    pokemon.order = pokeDetail.order;
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default;
    pokemon.types = pokeDetail.types.map((typeSlod) => { return typeSlod.type.name });
    pokemon.mainType = pokemon.types[0];

    return pokemon;
}