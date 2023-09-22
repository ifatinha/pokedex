const pokemonsOl = document.querySelector('#pokemonsOl');
const loadButton = document.querySelector('#loadMore');

const maxRegister = 100000;
const limit = 5;
let offset = 0;

function loadMorePokemo(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonsList = []) => {
        pokemonsOl.innerHTML += pokemonsList.map((pokemon) => {
            return `
                <li class="pokemon ${pokemon.mainType}">
                    <span class="pokemon-number">#000${pokemon.order}</span>
                    <h2 class="pokemon-name">${pokemon.name}</h2>
        
                    <div class="pokemon-detail">
                        <ol class="pokemon-types">
                            ${pokemon.types.map((type) => { return `<li class="pokemon-type ${type}">${type}</li>` }).join("")}
                        </ol>
                        <img src="${pokemon.image}" alt="${pokemon.name}">
                    </div>
                </li>
            `
        }).join("");
    })
}

loadMorePokemo(offset, limit);

loadButton.addEventListener('click', () => {
    offset += limit;
    const qtdPokemons = offset + limit;

    if (qtdPokemons >= maxRegister) {
        const newLimit = maxRegister - offset;
        loadMorePokemo(offset, newLimit);
        loadButton.parentElement.removeChild(loadButton);
        return
    } else {
        loadMorePokemo(offset, limit);
    }
});