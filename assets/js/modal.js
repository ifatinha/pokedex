const modalPokemon = document.querySelector("#modalPokemon");
const buttonModal = document.querySelector("#btnModal");
const btnCloseMobile = document.querySelector("#btn-close-mobile");
const btnCloseDesktop = document.querySelector("#btn-close-desktop");

function closeModal() {
    modalPokemon.style.display = 'none';
}

buttonModal.addEventListener('click', () => {
    modalPokemon.style.display = 'block';
})

btnCloseMobile.addEventListener('click', closeModal);
btnCloseDesktop.addEventListener('click', closeModal);

window.onclick = (event) => {
    if(event.target == modalPokemon){
        modalPokemon.style.display = 'none';
    }
}