// об`ект -  це впорядкована колекція значень, яка може містити елементи
// будь-якого типу даних (числа, рядки, об'єкти, інші масиви тощо
// Об'єкт у JavaScript – це центральна структура даних мови,
// яка дозволяє зберігати дані в парах ключ/значення.

// Масив це набір якіхось едементі
const playlist = {
  name: 'Мщй супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2'],
  trackCount: 1,
  changeName(newName) {
    this.name = newName;
  },
  addTracks(newTracks) {
    this.tracks.push(newTracks);
  },
  updateRating(newRating) {
    this.rating = newRating;
    this.trackCount = this.tracks.length;
  },
};

playlist.changeName('Нове ім`я');
playlist.addTracks('трек-3');
playlist.updateRating(7);

console.log(playlist);

// const propertyName = 'tracks';

// console.log(playlist[propertyName]);

// const inutName = 'color';
// const inputValue = 'red';

// const colorData = { [inutName]: inputValue };
// console.log(colorData);

const feedback = {
  a: 1,
  b: 2,
  c: 3,
};

let total5 = 0;

const keys = Object.keys(feedback);

for (const key of keys) {
  console.log(key);
  console.log(feedback[key]);
  //   total5 += feedback[key];
}

// console.log(total5);

const values = Object.values(feedback);

for (const value of values) {
  total5 += value;
}
console.log(total5);

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: true },
  { name: 'Ajax', online: false },
];

// const findFriendsName = (allFriends, name) => {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return 'Знайшли';
//     }
//   }
//   return 'Не знайшли';
// };

// console.log(findFriendsName(friends, 'Poly'));

// const findFriendsName = (allFriends) => {
//   const names = [];
//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };

// console.log(findFriendsName(friends));

// const findFriendsName = (allFriends) => {
//   const online = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       online.push(friend.name);
//     }
//   }
//   return online;
// };

// console.log(findFriendsName(friends));

const findFriendsName = (allFriends) => {
  const friendsByStatus = { online: [], offline: [] };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend.name);
      continue;
    }
    friendsByStatus.offline.push(friend.name);
  }
  return friendsByStatus;
};

console.log(findFriendsName(friends));

const s = {
  a: 1,
  b: 2,
  c: 3,
};

// spread - бере колекцію та зробить її на окреми елементи

console.log(Object.keys(s).length);

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log(allTemps);

const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);

const playlist2 = {
  name: 'Мщй супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2'],
  trackCount: 1,
};

const { name, rating, tracks, trackCount } = playlist;
console.log(name);

const rgb = [255, 100, 200];

const [red, , blue] = rgb;
console.log(red, blue);

const doMatch = (a, b, callback) => {
  const result = callback(a, b);
  console.log(result);
};

const add = (x, y) => {
  return x + y;
};

const sub = (x, y) => {
  return x - y;
};

doMatch(2, 3, add);
doMatch(20, 10, sub);

// Функція фільтр

const filter = (array, callback) => {
  const filteredArray = [];

  for (const ar of array) {
    const passed = callback(ar);

    if (passed) {
      filteredArray.push(ar);
    }
  }
  return filteredArray;
};

const callback1 = (value) => {
  return value > 3;
};

console.log(filter([1, 2, 3, 4, 5], callback1));
console.log(filter([5, 6, , 7, 8], callback1));

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 100, isFresh: true },
  { name: 'bananes', quantity: 300, isFresh: true },
];

const getFryitsQuantity = (fruit) => {
  return fruit.quantity > 100;
};

console.log(filter(fruits, getFryitsQuantity));

// замикання — це здатність функції пам'ятати та мати доступ до змінних
// зі своєї лексичної області видимості
// (тобто області видимості, де функція була оголошена),
// навіть після того, як зовнішня функція,
// в якій вона була оголошена, завершила своє виконання.

// замикання - функцію, яка оголошена всередині іншої функції.
// Внутрішня функція має доступ до змінних зовнішньої функції,
// навіть після того, як зовнішня функція вже завершила своє виконання.
// Ось ця "пам'ять" внутрішньої функції
// про змінні зовнішньої області видимості і називається замиканням.

// використовується щоб створювати приватні змінні та методи
// Збереження стану між викликами функцій

const makeSheff = (name) => {
  const makeDish = function (dish) {
    console.log(`${name} готує ${dish}`);
  };

  return makeDish;
};

const mango = makeSheff('Mango');
const kiwi = makeSheff('Kiwi');

mango('котлети');
kiwi('пироги');
console.dir(mango);

const myLibFactory = () => {
  let value = 0;

  const add = function (number) {
    value += number;
  };

  return {
    add,
    getValue() {
      return value;
    },
  };
};

const myLib = myLibFactory();

myLib.add(10);

console.dir(myLib.getValue);

// В стрілочних функціях не має свого аргумент зміної та this
// В стрілочних функція діз запам'ятовую контекст при об'яві (контект сроліки не можливо змінити)
