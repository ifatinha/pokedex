
const pokeApi = {}

pokeApi.getPokemons = async (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
    try {
        return await (fetch(url)
            .then((response) => { return response.json(); })
            .then((jsonBody) => { return jsonBody.results; }));
    } catch (error) {
        return console.error(error);
    }
}