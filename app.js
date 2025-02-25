// const promise = new Promise((resolve, reject) => {
//   const canFulfiled = Math.random() > 0.5;

//   if (canFulfiled) {
//     resolve('Проміс виконався успішно ✔️');
//   }

//   reject('Проміс виконався з помилкою ❌');
// });

// promise
//   .then((resolt) => resolt)
//   .catch((error) => error)
//   .finally(() => console.log('Буду виконан завжди ⚠️'));

// console.log(promise);

const makeOrder = (dish) => {
  const DELAY = 1000;

  return new Promise((res, rej) => {
    setTimeout(() => {
      const passed = Math.random() > 0.5;

      if (passed) {
        res(`Вот ваше блюдо - ${dish}`);
      }

      rej('Закончились продукты');
    }, DELAY);
  });
};

makeOrder('Пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

function onMakeOrderSuccess(resolve) {
  console.log(resolve);
}

function onMakeOrderError(error) {
  console.log(error);
}

// щоб відмовитися від колбеків внутрі якихось функцій
// then і catch щоб получити результат промісу
const makeOrder2 = (dish) => {
  return Promise.resolve(`${dish}`);
};

makeOrder2('Котлеты').then(onMakeOrderSuccess2);

function onMakeOrderSuccess2(resolt) {
  console.log(resolt);
}

// fetch('https://pokeapi.co/api/v2/pokemon/1')
//   .then((r) => r.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

const fetchPokemonById = (id) => {
  return fetch('https://pokeapi.co/api/v2/pokemon/1').then((r) => r.json());
};

fetchPokemonById(1).then(onPokemonSuccess).catch(onPokemonError);
fetchPokemonById(2).then(onPokemonSuccess).catch(onPokemonError);
fetchPokemonById(3).then(onPokemonSuccess).catch(onPokemonError);
fetchPokemonById(4).then(onPokemonSuccess).catch(onPokemonError);

function onPokemonSuccess(pokemon) {
  console.log(pokemon);
}

function onPokemonError(error) {
  console.log(error);
}

//
const horses = ['Aa', 'Bb', 'Cc'];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.race-btn'),
  winnerField: document.querySelector('.winner'),
  progress: document.querySelector('.progress'),
  tableBody: document.querySelector('.table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinner('');
  updateProgress('Заезд начался и ставки больше не принимаються!');
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinner(`Победил ${horse} финишировал за ${time} времени`);
    updateResultTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgress(
      (refs.progress.textContent = 'Заед окончен принимаються ставки')
    );
  });
}

function updateWinner(message) {
  refs.winnerField.textContent = message;
}

function updateProgress(message) {
  refs.progress.textContent = message;
}

function updateResultTable({ horse, time, raceCounter }) {
  const tr = ` <tr>
    <td>${raceCounter}</td>
    <td>${horse}</td>
    <td>${time}</td>
  </tr>`;

  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run(horse) {
  return new Promise((resolve, reject) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
