// Перебирающі методи масиву
// 1 forEach
// 2 map
// 3 filter
// 4 find
// 5 every some
// 6 reduce
// 7 sort

// 1 forEach ззамінює for поєлементно перебирає масив
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const r = numbers.forEach((number) => {
  console.log(number);
});

// 2 map - перебирає масив повертаю новий масив такої
// же самої дліни для обновлення всього або одного ы для виборки набор якихось значень

const r2 = numbers.map((number) => {
  console.log(number);
  return number * 2;
});
console.log(r2);

const players = [
  { id: '1', name: 'Mango', points: 100, online: true },
  { id: '2', name: 'Poly', points: 200, online: false },
  { id: '3', name: 'Kiwi', points: 300, online: true },
  { id: '4', name: 'Ajax', points: 400, online: true },
];

const playerName = players.map((player) => {
  return player.name;
});
console.log(playerName);

const playerId = players.map((player) => {
  return player.id;
});
console.log(playerId);

const playerPoints = players.map((player) => {
  return player.points;
});
console.log(playerPoints);

// const playerNameAndPoints = players.map((player) => {
//   return { name: player.name, pointer: player.points };
// });
// console.log(playerNameAndPoints);

const playerNameAndPoints = players.map(({ name, points }) => ({
  name,
  points,
}));
console.log(playerNameAndPoints);

// копію обьекта
const updatePlayers = players.map((player) => {
  return { ...player, points: player.points * 2 };
});
console.log(updatePlayers);

const playerIdUpdate = '3';

const updatePlayersId = players.map((player) => {
  if (playerIdUpdate === player.id) {
    return {
      ...player,
      points: player.points + 1000,
      name: (player.name = 'Yra'),
    };
  }
  return player;
});
console.log(updatePlayersId);

// 3 filter - перебирає масив повертаю новий масив повертає в новий масив елементи задовольняючі вимогам
const fileredNumbers = numbers.filter((number) => {
  return number < 3 || number > 6;
});
console.log(fileredNumbers);

const playerPointerFilter = players.filter((player) => {
  return player.points > 300;
});
console.log(playerPointerFilter);

const playerFilteredOnline = players.filter((player) => {
  return player.online;
});
console.log(playerFilteredOnline);

const playerFilteredOffline = players.filter((player) => {
  return !player.online;
});
console.log(playerFilteredOffline);

// 4 find - для пошуку унікальних елементів - повертаэ перший  знайдений елемент
const numberFind = numbers.find((number) => {
  return number > 5;
});
console.log(numberFind);

const playerId2 = '2';
const playerFindId = players.find((player) => {
  return playerId2 === player.id;
});
console.log(playerFindId);

const name2 = 'Ajax';
const playerNameFind = players.find((player) => {
  return name2 === player.name;
});
console.log(playerNameFind);

const a = (allPlayers, playerName) => {
  return allPlayers.find((player) => player.name === playerName);
};
console.log(a(players, name2));
console.log(a(players, 'Poly'));

// 5 every - перебирає масив та повертає true якщо всі елементи задовільняють вимогу
const isAllPlayers = players.every((player) => {
  return player.online;
});
console.log(isAllPlayers);

// 6 - some - якщо один елемент задовілняє вимогам
const isAllPlayersOffline = players.some((player) => {
  return player.points > 300;
});
console.log(isAllPlayersOffline);

// 7 reduce - перебираэ масив бере много і із много робить щось одне
const total = numbers.reduce((acc, number) => {
  return acc + number;
}, 0);
console.log(total);

const salary = {
  a: 10,
  b: 20,
  c: 30,
};

const totalSalary = Object.values(salary).reduce((total, value) => {
  return total + value;
}, 0);
console.log(totalSalary);

const totalPointsPlayer = players.reduce(
  (totalPoint, player) => totalPoint + player.points,
  0
);
console.log(totalPointsPlayer);

const cards = [
  { price: 10, quantity: 1 },
  { price: 20, quantity: 1 },
  { price: 30, quantity: 2 },
];

const totalAmout = cards.reduce((total, card) => {
  return total + card.price * card.quantity;
}, 0);
console.log(totalAmout);

const tweets = [
  { tags: ['js', 'node'] },
  { tags: ['css', 'node'] },
  { tags: ['css', 'js'] },
];

const allTags = tweets.reduce((tags, tweet) => {
  // tags.push(...tweet.tags);

  return [...tags, ...tweet.tags];
}, []);
console.log(allTags);

const tagsStats = allTags.reduce((acc, tag) => {
  return { ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 };
}, {});
console.log(tagsStats);

// sort - змінює оригіналлний масив сортирує по возрастанню сортирує по юнікоду
const num = [9, 8, 7, 6, 5];
const sortNumber = num.sort();
console.log(sortNumber);

const ab = num.sort((currentEl, nextEl) => {
  return currentEl - nextEl;
});
console.log(ab);

// Як зробити копію масиву є 2 методи slice() і операції ...spread
const copy = [...num].sort((a, b) => a - b);
console.log(copy);

const sortedPlayer = [...players].sort((currrentPlayer, nextPlayer) => {
  return nextPlayer.points - currrentPlayer.points;
});
console.log(sortedPlayer);

const byName = [...players].sort((currentPlayer, nextPlayer) => {
  const result = currentPlayer.name[0] > nextPlayer.name[0];

  if (result) {
    return 1;
  }

  return -1;
});
console.log(byName);

const n = [1, 4, 3, 6, 2, 5];

const sorted = [...n]
  .filter((n) => n > 3)
  .map((n) => n * 2)
  .sort((a, b) => b - a);
console.log(sorted);

const playerOnlineAndSort = players
  .filter((player) => player.online)
  .sort((a, b) => b.points - a.points);
console.log(playerOnlineAndSort);
