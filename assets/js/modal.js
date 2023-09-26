const modalPokemon = document.querySelector("#modalPokemon");

function openModal(pokemonId) {
    modalPokemon.style.display = 'block';

    pokeApi.getPokemonId(pokemonId).then((fullPokemon) => {
        modalPokemon.innerHTML = `
        <section class="modal-pokemon">
            <div class="m-pokemon-imagem">
                    <a href="#" aria-label="Button Close" class="btn-close" id="btn-close-mobile" onclick="closeModal()">
                    <i class="fa-solid fa-xmark"></i></a>
                 <img src="${fullPokemon.img}" alt="${fullPokemon.name}">
            </div>
            <div class="m-pokemon-info">
                <div class="m-pokemon-header ${fullPokemon.mainType.type.name}">
                    <div class="m-pokemon-top">
                        <div class="m-pokemon-number">
                            <img src="assets/images/pokebola.png" alt="Pokebola">
                            <span>000${fullPokemon.order}</span>
                        </div>
                        <a href="#" aria-label="Button Close" class="btn-close" id="btn-close-desktop" onclick="closeModal()">
                            <i class="fa-solid fa-xmark"></i></a>
                    </div>
                    <h1 class="m-pokemon-name">${fullPokemon.name}</h1>
                    <p class="m-pokemon-type">${fullPokemon.mainType.type.name} Pokémon</p>
                </div>
                <ul class="m-pokemon-detail">
                    <li>
                        <p>Experience</p>
                        <span>${fullPokemon.experience}</span>
                    </li>
                    <li>
                        <p>Height</p>
                        <span>${fullPokemon.height}</span>
                    </li>
                    <li>
                        <p>Weight</p>
                        <span>${fullPokemon.weight}</span>
                    </li>
                </ul>
                <div class="m-desc-container">
                        <p class="m-pokemon-desc">
                            When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.
                        </p>
                        <ul class="m-pokemon-ability">
                            ${fullPokemon.abilities.map((ability) => {
                                return `<li class="pokemon-ability ${fullPokemon.mainType.type.name}"><span>#${ability}</span></li>`
                            }).join("")}
                        </ul>
                        <div class="btn-save">
                            <button class="btn-default ${fullPokemon.mainType.type.name}">Save</button>
                        </div>
                </div>
            </div>
        </section>
    `;
    });
}

function closeModal() {
    modalPokemon.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target == modalPokemon) {
        modalPokemon.style.display = 'none';
    }
}