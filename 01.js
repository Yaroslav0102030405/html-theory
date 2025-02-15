// Зміни const і let

// number - ціді та дрібні числа
const age = 10;
const totalPrice = 200.14;
// string
const message = 'Добро пожаловать!';
// boolean
const isOpen = true;
// null
const ng = null;
// undefined
let a;
// силочні типи об'ект
const array = [];
const ob = {};

// оператор typeof для перевірки зміної
console.log(typeof a);
console.log(2);

// методи для роботи з числами
// 1 метод консуктор Number - который приводит строку к числу или если не получилось привести повертає NaN;
const ab = '5';
console.log(Number(ab));
// 2 Number.parseInt() - парсіт ціле число
const elementWidth = '59px';
const elementWidthParse = Number.parseInt(elementWidth);
console.log(elementWidthParse);
// 2 Number.parseFloat() - парсіт дробне число
const elementHeight = '200.12px';
const elementHeightParse = Number.parseFloat(elementHeight);
console.log(elementHeightParse);
// 3 toFixed()
const salary = 13.214343434;
const salaryNumber = Number(salary.toFixed(5));
console.log(salaryNumber);

// Приклоди з обёектом Math

// Приклад
const colors = ['orange', 'tomato', 'blue', 'green', 'gray', 'black'];

const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];

document.body.style.backgroundColor = color;

// 2 Методи роботи з строками
// Довжина строки
const message2 = 'В этой строке 26 символов.';
console.log(message2.length);
// Дізнатися останій символ -1
console.log(message2.length - 1);

// Конкатенація строк
const firsName = 'Chelsy';
const lastName = 'Ema';
const fullName = firsName + ' ' + lastName;
console.log(fullName);

// Шаблоні строкі
const quantity = 5;
const orderMsg = `Ви замовили ${quantity} холодильників`;
console.log(orderMsg);

// нормалізація користувацього вводу
const brand = 'Samsung';
// const inDb = 'samsung';
const normalizedBrand = brand.toLowerCase();
console.log(normalizedBrand);

// копія
const brandCopy = brand.slice(3);
console.log(brandCopy);

// Пошук в строке под строку з методом includes()
const word1 = 'cпам';
const string1 = 'Я принц Абудала, и это не Cпам';

const normalizedString = string1.toLowerCase().includes(word1);
console.log(normalizedString);

// оператори порівняння

// Конструктор Boolean()
// 6 ложних значень які приводяться до false а все остальне приводиться до true
// 0, NaN, null, undefined, порожня строка "", false
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(false));

console.log(Boolean('Привіт'));

//
const sub = 'pro';

const canAccessContent = sub === 'pro' || sub === 'vip';
console.log(canAccessContent);

//
const balance = 1000;
let message3;

if (balance >= 0) {
  message3 = 'Позитивний баланс';
} else {
  message3 = 'Негативний баланс';
}
console.log(message3);

// тернарний оператор
const message4 = balance >= 1000 ? 'Позитивний' : 'Негативний';
console.log(message4);

// lesson 2 ----------------------
const star = 5;
let price;
let message6;

switch (star) {
  case 1:
    price = 'Ціна: 20.00$ за одну добу';
    message6 = `'Ви обрали готель з ${star} зіркою'`;
    break;

  case 2:
    price = 'Ціна: 30.00$ за одну добу';
    message6 = `Ви обрали готель з зіркою ${star}`;
    break;

  case 3:
    price = 'Ціна: 50.00$ за одну добу';
    message6 = `Ви обрали готель з зіркою ${star}`;
    break;

  case 4:
    price = 'Ціна: 70.00$ за одну добу';
    message6 = `Ви обрали готель з зіркою ${star}`;
    break;

  case 5:
    price = 'Ціна: 120.00$ за одну добу';
    message6 = `Ви обрали готель з зіркою ${star}`;
    break;

  default:
    console.log(`Такої готелю у якого ${star} зірок у нас не має`);
}

console.log(message6);
console.log(price);

// Задача 2
const minSalary = 500;
const maxSalary = 5000;
const employeers = 3;
let totalSalary = 0;

for (let i = 1; i <= employeers; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(`ЗП співробітника ${i} - ${salary}`);

  totalSalary += salary;
}
console.log(totalSalary);

// Задача 3
const min1 = 0;
const max1 = 5;
let total1 = 0;

for (let i = min1; i <= max1; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
  total1 += i;
}
console.log('total', total1);

// Задача 4
let balance1 = 2000;
const payement1 = 2000;

console.log(`Загальна стоимость замовлення ${payement1} кредитів`);

if (payement1 <= balance1) {
  balance1 -= payement1;

  console.log(`На счету залишилось ${balance1} кредитів`);
} else {
  console.log(`Недостатньо грошей ${balance1} для покупки`);
}

// Задача 4
let totalSpent = 2000;
let payement2 = 500;
let discount = 0;

if (totalSpent < 100) {
  console.log('Не партнер, знижка 0%');
  discount = 0;
} else if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовий партнер, знижка 2%');
  discount = 0.02;
} else if (totalSalary >= 1000 && totalSpent < 5000) {
  console.log('Срібний партнер, знижка 5%');
  discount = 0.05;
} else if (totalSalary >= 5000) {
  console.log('Золотой партнер, знижка 10%');
  discount = 0.1;
}

payement2 -= payement2 * discount;

console.log(
  `Оформляємо замовлення на суму ${payement2} зі знижкою ${discount * 100}%`
);

totalSpent += payement2;

console.log(`Загальна сума всіх покупок в магазині ${totalSpent}`);

// lesson 11
// Методи массивів
// forEach
// map
// filter
// find
// every and some
// reduce
// sort

// forEach - замена for просто перебирає массив
// першим аргументом це колбек функція а другим аргументом це обьект в контексті якого потрібно викликати
const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((number) => console.log(number));

// map - перебирає массив і повертає массив такої дліни
// коли треб а з великої колекції створити нову колекцію якихось свойств

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// массив обьектів
const players = [
  {
    id: 'player-1',
    name: 'Mango',
    timePlayed: 310,
    points: 54,
    quantity: 2,
    online: false,
  },
  {
    id: 'player-2',
    name: 'Poly',
    timePlayed: 470,
    points: 92,
    quantity: 3,
    online: true,
  },
  {
    id: 'player-3',
    name: 'Ajax',
    timePlayed: 230,
    points: 48,
    quantity: 5,
    online: true,
  },
  {
    id: 'player-4',
    name: 'Chelsy',
    timePlayed: 80,
    points: 71,
    quantity: 4,
    online: false,
  },
];

const playersName = players.map((player) => player.name);
console.log(playersName);
const playersPoints = players.map((player) => player.points);
console.log(playersPoints);
const playersId = players.map((player) => player.id);
console.log(playersId);

const playerNameAndOnline = players.map(({ name, online }) => ({
  name,
  online,
}));
console.log(playerNameAndOnline);

const updatedPlayers = players.map((player) => {
  return {
    ...player,
    points: player.points * 1.1,
  };
});
console.log(updatedPlayers);

const playersIdUpdate = 'player-3';

// const updatedPlayers2 = players.map((player) => {
//   if (playersIdUpdate === player.id) {
//     return {
//       ...player,
//       // timePlayed: player.timePlayed + 2000,
//       name: (player.name = 'newName'),
//     };
//   }

//   return player;
// });
// console.log(updatedPlayers2);

const updatedPlayers2 = players.map((player) =>
  playersIdUpdate === player.id
    ? { ...player, name: (player.name = 'newName') }
    : player
);
console.log(updatedPlayers2);

// filter - повертає новий массив з від фільтрованими значеннями
// пишемо по якому условію треба від фільтровати
const numbersFilter = numbers.filter((number) => number > 3);
console.log(numbersFilter);

const onlinePlayers = players.filter((player) => player.online);
console.log(onlinePlayers);

const offlinePlayers = players.filter((player) => !player.online);
console.log(offlinePlayers);

const hardcorePlayers = players.filter((player) => player.timePlayed > 300);
console.log(hardcorePlayers);

// find - використовується для пошуку в коллекції одно унікального елемента
// знаходить перший елемент який заховолняє вимогам
const numberFind = numbers.find((number) => number > 5);
const numberFind2 = numbers.find((number) => number === 5);
console.log(numberFind2);
console.log(numberFind);

const playerToFind = 'player-4';

const playerWithId = players.find((player) => player.id === playerToFind);
console.log(playerWithId);

const findPlayerByid = (allPlayers, playerId) => {
  return allPlayers.find((player) => player.id === playerId);
};

console.log(findPlayerByid(players, playerToFind));

// повертає статус true або false
// every - повертає true якщо всі елементи зодовольняють условію
const isAllOnline = players.every((player) => player.online);
console.log(isAllOnline);

// some - якщо один задовлінє вимогам
const isAnyOnline = players.some((player) => player.online);
console.log(isAnyOnline);

// reduce - це швецарскій нож для роботи з коллекцією
// він бере багато і із нього робить щось одне
// reduce - для роботи з числами массивами та обьектами
// більшість робота з числами використовують reduce
const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

const salaru = { a: 10, b: 20, c: 30 };

const totalSalary1 = Object.values(salaru).reduce(
  (total, value) => total + value,
  0
);
console.log(totalSalary1);

const totalTimePlayed = players.reduce(
  (acc, player) => acc + player.timePlayed,
  0
);
console.log(totalTimePlayed);

const totalAmout = players.reduce(
  (acc, { timePlayed, quantity }) => acc + timePlayed * quantity,
  0
);
console.log(totalAmout);

const tweets = [
  { id: '1', likes: 2, tags: ['js', 'node'] },
  { id: '2', likes: 4, tags: ['js', 'react'] },
  { id: '3', likes: 5, tags: ['js', 'css'] },
  { id: '4', likes: 2, tags: ['css', 'node'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

const tagsStats = allTags.reduce((acc, tweet) => {
  return { ...acc, [tweet]: acc[tweet] ? acc[tweet] + 1 : 1 };
}, {});
console.log(tagsStats);
