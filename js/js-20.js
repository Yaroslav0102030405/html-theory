const promise = new Promise((resolve, reject) => {
  const canFulFill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulFill) {
      resolve('Промис виконався успішно!');
    }
    reject('Проміс виконався з помилкою');
  }, 1000);
});

promise
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error))
  .finally(() => console.log('Я буду виконан в будь якому випадку'));

console.log(promise);

const makeDish = (dish) => {
  return Promise.resolve(`Ваше замовлення ${dish}`);
};

makeDish('Котлети').then((resolve) => console.log(resolve));
console.log(makeDish);

// Практика
// fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   .then((redolve) => redolve.json())
//   .then((pokemon) => console.log(pokemon))
//   .catch((error) => console.log(error));

// Реальний приклад
const fetchPokemonById = (id) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((resolve) =>
    resolve.json()
  );
};

fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

function onFetchSuccess(pokemon) {
  console.log(pokemon);
}

function onFetchError(error) {
  console.log(error);
}
