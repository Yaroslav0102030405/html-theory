// import API from './api-service.js';

const containerRef = document.querySelector('.js-con');
const searchForm = document.querySelector('.js-form');

searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;

  fetchPokemon(searchQuery)
    .then((pokemon) => {
      containerRef.innerHTML = renderPokemonCard(pokemon);
    })
    // .catch((error) => console.log(error))
    .catch(onFetchError)
    .finally(() => {
      form.reset();
    });
}

function fetchPokemon(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  return fetch(url).then((response) => {
    return response.json();
  });
}

function renderPokemonCard({ sprites, front_default, name, weight, height }) {
  return `<img src="${sprites.front_default}" />
  <h1>${name}</h1>
  <p>${weight}</p>
  <p>${height}</p>`;
}

function onFetchError() {
  alert('Что-то пошло не так');
}

fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then((r) => r.json())
  .then(console.log);
