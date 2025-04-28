const friends = ['Mango', 'Kiwi', 'Poly'];

console.log(friends.length);

console.log(friends[0]);
console.log(friends.length - 1);

// console.log(friends);

// for (const friend of friends) {
//   console.log(friend);
// }

// for (let i = 0; i < friends.length; i += 1) {
//   console.log(friends[i]);
// }

const numbers = [1, 2, 3, 4, 5, 6];
let total = 0;

// for (const number of numbers) {
//   total += number;
// }
// console.log(total);

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log((numbers[i] = Math.round(numbers[i] * 10)));
// }

for (const number of numbers) {
  if (number % 2 !== 0) {
    // console.log(`Четное - ${number}`);
    // total += number;
    continue;
  }
  console.log(`Четные - ${number}`);
  total += number;
}
console.log(total);

const logins = ['a', 'b', 'c'];
const loginToFind = 'c';
// let message = '';

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Користувач ${loginToFind} знайден`;
//     break;
//   } else {
//     message = `Користувач ${loginToFind} не знайден`;
//   }
// }

const message = logins.includes(loginToFind)
  ? `Користувач ${loginToFind} знайден`
  : `Користувач ${loginToFind} не знайден`;

console.log(message);

const numbers1 = [7, 6, 5, 4, 3];
let smallesNumbers = numbers1[0];

for (const number of numbers1) {
  if (number < smallesNumbers) {
    smallesNumbers = number;
  }
}

console.log(smallesNumbers);

const friends2 = ['a', 'b', 'c'];
const string = friends2.join('-');
console.log(string);

// метод join() - визивається на масиві і бвсі елементи масива об'еднує в одну строку
// метод split() - розбиває строку по разделітелю може строку розбити по символьну

const string2 = 'JavaScript';
const letters = string2.split('');
let invertedString = '';

for (const letter of letters) {
  console.log(letter);

  invertedString +=
    letter === letter.toLowerCase()
      ? letter.toUpperCase()
      : letter.toLowerCase();
}
console.log(invertedString);

const title = 'Top React 10 desc';
const normalizedTitle = title.toLowerCase().split(' ').join('-');
console.log(normalizedTitle);

const ar1 = [1, 2, 3];
const ar2 = [4, 5, 6];
let total3 = 0;

const num = ar1.concat(ar2);
console.log(num);

for (const n of num) {
  total3 += n;
}
console.log(total3);

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);
// cards.splice(index, 1);
// console.log(cards);

const cardToInsert = 'Карточка-6';
// cards.push(cardToInsert);

cards.splice(4, 0, cardToInsert);
console.log(cards);

const cardToUpdate = 'Карточка-4';
const ind = cards.indexOf(cardToUpdate);
cards.splice(ind, 1, 'Обновленная карточка 4');
console.log(cards);

// функція використовується для перевикористання коду

// параметри це те що функцію об'явили як локальні зміни
// аргумент це значення для параметрів під час виклику

const card4 = [1, 2, 3, 4, 5];

const totalPrice = (items) => {
  let total = 0;
  for (const item of items) {
    total += item;
  }
  return total;
};

console.log(totalPrice(card4));
console.log(totalPrice([5, 6, 7]));

const logins2 = ['a', 'b', 'c'];
const loginToFind2 = 'c';

const findLogin = (logins, loginToFind) => {
  return logins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайден`
    : `Користувач ${loginToFind} не знайден`;
};

console.log(findLogin(logins2, loginToFind2));
console.log(findLogin(['g', 'e'], 'e'));

const numbers2 = [7, 6, 5, 4, 3, 2, 1];

const findSmallNumber = (numbers) => {
  let smallesNumbers = numbers[0];

  for (const number of numbers) {
    if (number < smallesNumbers) {
      smallesNumbers = number;
    }
  }

  return smallesNumbers;
};

console.log(findSmallNumber(numbers2));

// ...имя - операція рест -остаток
const fn = (...args) => {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }
  return total;
};
console.log(fn(10, 20));

const filteredNumbers = (array, ...args) => {
  const uniqueElement = [];

  for (const arr of array) {
    if (args.includes(arr)) {
      console.log(`${arr} есть везде`);
      uniqueElement.push(arr);
    }
  }
  return uniqueElement;
};

console.log(filteredNumbers([1, 2, 3, 4, 5], 1, 3, 6, 7));
