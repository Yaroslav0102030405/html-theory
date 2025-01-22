// Методи для чисел

// Констурктор Number() який повертає число або NaN
const num0 = '5';
const copyNum0 = Number(num0);
console.log(copyNum0);

// Метод Number.parsaInt() парсит з рядка ціле число
const num = '50px';
const copyNum = Number.parseInt(num);
console.log(copyNum);

// Метод Number.parsaInt() парсит з рядка дробне число
const num2 = '70.21px';
const copyNum2 = Number.parseFloat(num2);
console.log(copyNum2);

// Метод toFixed() відрізає дробне число
const num3 = 12.12334675;
const copyNum3 = Number(num3.toFixed(2));
console.log(copyNum3);

// Масив
// const colors = ['red', 'green', 'blue'];
// // Індекс останього числа
// const max = colors.length - 1;
// const min = 0;
// // Математична операція яка повертає з масиву випадковий індекс
// const index = Math.round(Math.random() * (max - min) + min);
// // індекс перетворюємо на колір
// const color = colors[index];
// console.log(color);
// // Звертаємося до DOM та на боді додаємо випадковий колір фону
// document.body.style.backgroundColor = color;

// Строки
// Дізнатися довжину
const message = 'В этой строке 26 символов.';
console.log(message.length);

// Конкатенація строк
const firstName = 'Yaroslav';
const lastName = 'Lukovetskyi';

const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Шаблонні строки
const quantity = 15;
const orderMsg = `Ви замовили ${quantity} холодильників`;
console.log(orderMsg);

// Нормалізація ввода користувача
// приведення строки до нижнього регістру
const brand = 'Samsung';
const normalizedBrand = brand.toLocaleLowerCase();
console.log(normalizedBrand);

// приведення до верхнього регістру
const brand2 = 'Samsung';
const normalizedBrand2 = brand.toLocaleUpperCase();
console.log(normalizedBrand2);

// Пошук в строко подстроку
const word = 'спам';
const string = 'Привіт я принц Абдул и це не спам';
const newString = string.includes(word);
console.log(newString);

// Робимо копію строки і обрізає її
const string2 = 'Samsung';
const newString2 = string2.slice(1);
console.log(newString2);

// Логічне І виорпистовується для перевірки множествених умов
// бере оперант з ліва та оперант с прават і приводить их до true або false
// під капотом проісходить преобразованіе булеває
// Зупиняєеться на лжи
// Повертає на чем зупинилось або останій оперант
console.log(1 && 'Привіт');

// Логічне ІЛІ
// Зупиняється на правді
// Повертає на щом зупинилось або останій оперант
console.log('Добрий день' || 7);

// Логычне НЕ
// робить інверсію !true замінює на false
console.log(!true);

// оператор розгалуження if() коли нам потрібно виконати код по умові
const balance = 1000;
let message1;

if (balance > 0) {
  message1 = 'Позитивний баланс';
} else {
  message1 = 'Негативний баланс';
}
console.log(message1);

// оператор розгалуження else if()
const salary = 700;

if (salary <= 200) {
  console.log('Рівень 1');
} else if (salary > 500 && salary < 1500) {
  console.log('Рівень 2');
} else {
  console.log('Рівень 3');
}

// тернарний оператор використовується коли треба в зміну записати якійсь код за умовою
// const message2 = умова ? 'Вираз 1' : 'Вираз 2';
const salary1 = -100;

const message2 =
  salary1 > 0
    ? 'Позитивний баланс на карті'
    : 'Негативний баланс і треба поповнити рахунок';
console.log(message2);

// Блочна область видимості
// Глобальна область видимості
const b = 10;

if (true) {
  // блочна область видимості і за її межами ціх скобок ця зміна буде не доступна
  const a = 5;
  console.log(a);
}

console.log(b);

// 1

// const string5 = '100';
// const numberString = Number(string5);
// console.log(numberString);

// const elementWidth = '50px';
// const numberElementWidth = Number.parseInt(elementWidth);
// console.log(numberElementWidth);

// const elementHeight = '10.12px';
// const numberElementHeight = Number.parseFloat(elementHeight);
// console.log(numberElementHeight);

// const salary5 = 130.12344;
// const numberSalary = Number(salary5.toFixed(2));
// console.log(numberSalary);

// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);

// if (!base) {
//   alert('Это строка пожалуйста введите число');
// }

// let power = prompt('Давай степень');
// power = Number(power);
// console.log(power);

// const result5 = base ** power;
// alert(result5);

// дізнатися дліну
const message5 = 'В этой строке 26 символов.';
const res = message.length;
console.log(res);

// Конкатенація строк
const firstName5 = 'Yaroslav';
const lastName5 = 'Lukovetskyi';
const fullName5 = firstName + lastName;
console.log(fullName5);

// Шаблоні строки
const quantity5 = 30;
const orderMsg5 = `Ви замовили ${quantity5} холодильників`;
console.log(orderMsg5);

// Нормалізація ввода
const brand5 = 'Samsung';
const normalizedBrand5 = brand5.toUpperCase();
console.log(normalizedBrand5);

const normalizedBrand6 = brand5.toLowerCase();
console.log(normalizedBrand6);

const copyBrand5 = brand5.slice(1).toUpperCase();
console.log(copyBrand5);

const spanString = 'акція';
const string5 = 'Привіт це акція';
const res6 = string5.includes(spanString);
if (res6) {
  console.log(`Такое слово ${spanString} найдено`);
}
console.log(res6);

// Тернарний оператор
const balance7 = 1000;
const message7 = balance7 >= 0 ? 'Позитивний баланс' : 'Негативний баланс';
console.log(message7);

// switch
const option = 3;
let message8 = '';

switch (option) {
  case 1:
    message8 = 'Ви можете забрати товар завтра з 12:00 в нашем офісе';
    break;
  case 2:
    message8 = 'Курьер доставіт замовлення завтра с 9:00 до 18:00';
    break;
  default:
    message8 = 'Вам зателефонує менеджер';
}

console.log(message8);

// масив - це колекція список однотипних елементів
const friends = ['Mango', 'Kiwi', 'Rich'];
console.log(friends);
// Всі методи масиву лежать в прототипі. Можна ідкрити консоль и подивитися на їх
// Масив починається з нуля
// Елементи масиву розділяється комою

// звернутися к елементу масиву
console.log(friends[0]);

// перезаписати значення
console.log((friends[0] = 'Tango'));

// перебрати масив
for (const friend of friends) {
  console.log(friend);
}

const num5 = [1, 2, 3, 4, 5];
let total = 0;

// for (let i = 0; i < num5.length; i += 1) {
//   total += num5[i];
// }
// console.log(total);
// for (const num of num5) {
//   total += num;
// }
// console.log(total);

// for (const num of num5) {
//   if (num % 2 !== 0) total += num;
// }
// console.log(total);

const logins = ['mks', 'art', 'css'];
const loginToFind = 'art';
// let mes = `Пользователь ${loginToFind} не найден`;

// for (const login of logins) {

//   if (login !== loginToFind) {
//     mes = `Найден ${loginToFind}`;
//     break;
//   }

// }

// console.log(mes);
const mes = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден`
  : `Пользователь ${loginToFind} не найден`;

console.log(mes);

console.log(logins.slice());

// функція
const num8 = [1, 2, 3, 4, 5, 6, 7];

const calculateTotal = function (items) {
  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

console.log(calculateTotal(num8));

// Обьекты
const playlist = {
  name: 'Мой плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,

  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
    // this.trackCount = this.tracks.length;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};
playlist.changeName('Новое имя');
playlist.addTrack('Новый трек-4');

console.log(playlist);

const propertyName = 'tracks';

console.log(playlist[propertyName]);

// Обратиться к свойству
console.log(playlist.name);

// Динамическое вычесление
const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};

console.log(colorPickerData);

// перебрать обьект
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const keys = Object.keys(feedback);
console.log(keys);
let total9 = 0;

const values = Object.values(feedback);
console.log(values);

for (const value of values) {
  total9 += value;
}
console.log(total9);

// все во фронтенде это массив обьектов
const friends9 = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
];

for (const friends of friends9) {
  console.log(friends);
}

// console.log(friends9);
// const findFriendByName = function (allFriends, friendName) {
//   for (const allFriend of allFriends) {
//     if (allFriend.name === friendName) {
//       return `Мы нашли ${friendName}`;
//     }
//   }
//   return `Не нашли ${friendName}`;
// };

// console.log(findFriendByName(friends9, 'Kiwi'));

// const getAllName = function (items) {
//   const names = [];

//   for (const item of items) {
//     console.log(item.name);

//     names.push(item.name);
//   }

//   return names;
// };

// console.log(getAllName(friends9));

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (!friend.online) {
//       onlineFriends.push(friend.name);
//     }
//   }

//   return onlineFriends;
// };

// console.log(getOnlineFriends(friends9));

// const getFriendsByOnlineStatus = function (allFriends) {
//   const status = {
//     online: [],
//     offline: [],
//   };

//   for (const friend of allFriends) {
//     if (friend.online) {
//       status.online.push(friend);
//       continue;
//     }
//     status.offline.push(friend);
//   }

//   return status;
// };

// console.log(getFriendsByOnlineStatus(friends9));

// Распыление обьектов
const a = { x: 1, y: 2 };
const bb = { x: 0, z: 4 };

const c = { name: 'Turbo', ...a, ...bb, service: 'Good' };
console.log(c);

const defaultSettings = {
  theme: 'light',
  showNotification: true,
};

const usertSettings = {
  theme: 'black',
  showNotification: true,
};

const finalSettings = {
  ...defaultSettings,
  ...usertSettings,
};

console.log(finalSettings);

const feedback2 = {
  good: 5,
  neutral: 10,
  bad: 3,
};
const { good, bad } = feedback2;

console.log(good, bad);

const add = (...args) => {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
};

console.log(add(2, 8, 2, 3, 4, 5, 15));

const user = {
  tag: 'Mango',
  showTag() {
    console.log(this);
  },
};

user.showTag();

// Обьявили функцию
const showTag = function () {
  console.log(this);
  console.log(this.tag);
};

// создали обьект
const user2 = {
  tag: 'Mango',
};

// добавили новое свойство функцию
user2.showUserTag = showTag;
// вызвали обьект
user2.showUserTag();

const showThis = function () {
  console.log(this);
};

// showThis();

const objA = {
  a: 1,
  b: 2,
};

// метод колл  и аплайн один раз привязывает контекст и сразу вызывает эту функцию
// привязывает к функции контекст
showThis.call(objA);
showThis.apply(objA);

// байн делает копию функции с привязанным контектсвом которую можны вызватт потом
const changeColor = function (color) {
  console.log(this);
  this.color = color;
};

const hat = {
  color: 'black',
};

const sweater = {
  color: 'green',
};

const changeHatColor = changeColor.bind(hat);
changeHatColor('yellow');
console.log(hat);

class Car1 {
  // метод класса
  constructor() {}
}
console.dir(Car1);
const carInstance = new Car1();
console.log(carInstance);

//  Методы массивов
const numbers = [1, 2, 3, 4, 5];

// современная замена метода for
// number.forEach((number) => {
//   console.log(number);
// });

// метод map
// имутабильность в разработке когда мы не хотим изменять оригинальные данные а создать новые данные на их основе
// const doubleNumders = numbers.map((number) => {
//   console.log(number);

//   return number * 2;
// });

// console.log(doubleNumders);

const players = [
  { id: '1', name: 'Mango', time: 100, points: 24, online: true },
  { id: '2', name: 'Poly', time: 20, points: 34, online: false },
  { id: '3', name: 'Kiwi', time: 30, points: 44, online: true },
  { id: '4', name: 'Ajax', time: 40, points: 54, online: false },
];

// вернуть одно значение
const playersNames = players.map((player) => player.name);
console.log(playersNames);

// вернуть два и больше значения
// const res1 = players.map((player) => {
//   return {
//     name: player.name,
//     time: player.time,
//   };
// });

// const res1 = players.map(({ name, time }) => ({ name, time }));
// console.log(res1);

// метод map используеться дл обновления данных
// const updatePlayers = players.map((player) => {
//   return { ...player, points: player.points * 2 };
// });
// console.log(updatePlayers);

// когда нужно обновить данные 1 игрока
// const playerId = '3';

// const updatePlayers = players.map((player) => {
//   console.log(player.id);
//   if (playerId === player.id) {
//     return {
//       ...player,
//       time: player.time + 500,
//       name: (player.name = 'AAAAA'),
//     };
//   }
//   return player;
// });
// console.log(updatePlayers);

const mango = 'Poly';

// const filtered = players.filter((player) => {
//   if (mango === player.name) {
//     return player.name;
//   }
//   return 'Поки такої людини не має у списку';
// });
// console.log(filtered);

// const filtered1 = players.filter((player) => player.time > 10);
// console.log(filtered1);

const playerName = (all, name) => {
  return all.find((al) => al.name === mango);
};

console.log(playerName(players, mango));

const number8 = [10, 20, 30, 40, 50];

const total1 = number8.reduce((acc, num) => acc + num, 0);
console.log(total1);

const salary12 = {
  m: 20,
  s: 30,
  t: 50,
};

const totalSalary = Object.values(salary12).reduce(
  (total, num) => total + num,
  0
);
console.log(totalSalary);

const totalTimePlayers = players.reduce(
  (totalTime, player) => totalTime + player.time,
  0
);
console.log(totalTimePlayers);

const carts = [
  {
    label: 'Aplle',
    price: 30,
    quantity: 2,
  },
  {
    label: 'Poly',
    price: 10,
    quantity: 2,
  },
];

const totalCart = carts.reduce(
  (total, cart) => total + cart.price * cart.quantity,
  0
);
console.log(totalCart);

const number11 = [1, 2, 3, 4, 5];

const sortNumbers = [...number11].sort((a, b) => a - b);
console.log(sortNumbers);

const data = [{ name: 'Aango' }, { name: 'Bango' }, { name: 'Cango' }];

const sortedData = [...data].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  if (result) {
    return 1;
  }
  // if (!result) {
  //   return -1;
  // }
  return -1;
});

console.log(sortedData);

const itemRef = document.querySelector('li');
// itemRef.classList.add('super');

// if (itemRef.classList.contains('super')) {
//   itemRef.classList.replace('super', 'cool');
// }

console.log(itemRef);

const color1 = [
  { label: 'red', color: '#F44336' },
  { label: 'red', color: '#4CAF50' },
];

const waperRef = document.querySelector('.waper');

const makeColor = (options) => {
  return options.map((option) => {
    const buttonRef = document.createElement('button');
    buttonRef.type = 'button';
    buttonRef.classList.add('btn');
    buttonRef.textContent = option.label;
    buttonRef.style.backgroundColor = option.color;

    return buttonRef;
  });
};

const elements2 = makeColor(color1);
waperRef.append(...elements2);

import transationsHistory from './data.js';
// console.log(transationsHistory);

const makeTransationsHistoryMurkup = (transations) => {
  const { id, amout, date, bisiness, type, name, account } = transations;
  return `
   <tr>
          <td>${id}</td>
          <td>${amout}</td>
          <td>${date}</td>
          <td>${bisiness}</td>
          <td>${type}</td>
          <td>${name}</td>
          <td>${account}</td>
        </tr>`;
};

const tableRef = document.querySelector('.table');
const makeRows = transationsHistory.map(makeTransationsHistoryMurkup).join('');

tableRef.insertAdjacentHTML('beforeend', makeRows);
console.log(makeRows);

const htmlEl = document.querySelector('html');
const buttonEl = document.querySelector('.js-container');

buttonEl.addEventListener('click', onClickButton);

function onClickButton(e) {
  console.log(e.target.textContent);
  if (e.target.textContent === 'UA') {
    htmlEl.setAttribute('lang', 'ua');
    console.log('Ghbdtn');
  } else if (e.target.textContent === 'EN') {
    htmlEl.setAttribute('lang', 'ru');
  }
  return;
}

console.log(htmlEl.lang);

// onClickButton();
