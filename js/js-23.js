// import pokemonCard from '../templates/pokemonCard';
// console.log(pokemonCard);

// import API from './api-service';

const pokemonRef = document.querySelector('.pokemon');
const formSearch = document.querySelector('.js-form-search');

formSearch.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const searchQuery = e.currentTarget.elements.query.value;

  fetchPokemon(searchQuery)
    .then(onRenderPokemonCard)
    .catch(onFetchError)
    .finally(() => formSearch.reset());
}

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    (response) => {
      return response.json();
    }
  );
}

function onRenderPokemonCard({ sprites, from_default, name, weight }) {
  const markup = `<div class='card'>
  <img class="center" src='${sprites.front_default}' alt='${name}' />
  <div class='card-body'>
    <h2>${name}</h2>
    <p>${weight}</p>
  </div>
</div>`;
  pokemonRef.innerHTML = markup;

  //   return markup;
}

function onFetchError(error) {
  console.log(error);
  alert('Такого покемона ми не знайшли у нас в списку...');
}

fetchPokemon2().then((pokemon) => console.log(pokemon));

function fetchPokemon2(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=5`).then((response) => {
    return response.json();
  });
}

console.log(fetchPokemon2);
