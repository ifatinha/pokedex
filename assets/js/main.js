const pokemonsOl = document.querySelector('#pokemonsOl');
const loadButton = document.querySelector('#loadMore');

const maxRegister = 100000;
const limit = 5;
let offset = 0;

function loadMorePokemon(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonsList = []) => {
        pokemonsOl.innerHTML += pokemonsList.map((pokemon) => {
            return `
                <li class="pokemon ${pokemon.mainType}" id="${pokemon.order}" onclick="openModal('${pokemon.order}')">
                    <span class="pokemon-number">#000${pokemon.order}</span>    
                    <h2 class="pokemon-name">${pokemon.name}</h2>
        
                    <div class="pokemon-detail">
                        <ol class="pokemon-types">
                            ${pokemon.types.map((type) => {
                return `<li class="pokemon-type ${type}">${type}</li>`
            }).join("")
                }
                        </ol>
                        <img src="${pokemon.image}" alt="${pokemon.name}">
                    </div>
                </li>
            `
        }).join("");
    })
}

loadMorePokemon(offset, limit);

loadButton.addEventListener('click', () => {
    offset += limit;
    const qtdPokemons = offset + limit;

    if (qtdPokemons >= maxRegister) {
        const newLimit = maxRegister - offset;
        loadMorePokemon(offset, newLimit);
        loadButton.parentElement.removeChild(loadButton);
        return
    } else {
        loadMorePokemon(offset, limit);
    }
});

// pokeApi.getPokemonId(1).then((fullPokemon) => {
//     console.log(fullPokemon);
// });