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

// lesson 12
// sort - підходить для фронтет задач повседневних
// sort - змінює оригінальний массив
// сортирує по возрастанию приводит елементи к строке и сортирує по юнікоду
// сорт змінює елементи в массиві і нічого не удаляє
const numbers = [10, 20, 30, 40, 50];

const numbersSort = numbers.sort((start, end) => end - start);
console.log(numbersSort);

// щоб зробити копію масиву е slice() або spreed
const copy = [...numbers];
console.log(copy === numbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlated: 310, online: true },
  { id: 'player-2', name: 'Poly', timePlated: 470, online: false },
  { id: 'player-3', name: 'Ajax', timePlated: 110, online: true },
  { id: 'player-4', name: 'Kiwi', timePlated: 210, online: true },
];

const sortedByBestPlayers = [...players].sort((prePlayer, nextPlayer) => {
  return prePlayer.timePlated - nextPlayer.timePlated;
});
console.log(sortedByBestPlayers);

const sortedTimePlayed = [...players].sort((prevPlayer, nextPlayer) => {
  return nextPlayer.timePlated - prevPlayer.timePlated;
});
console.log(sortedTimePlayed);

const sortedByName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];

  return result ? 1 : -1;

  // if (result) {
  //   return 1;
  // }
  // return -1;
});

console.log(sortedByName);

const name = ['a', 'b', 'с'];
const name2 = ['d'];
const res = name.length + name2.length;
console.log(res);

const array1 = [1, 2, 3, [4, 5, [6]]];
console.log(array1.flat(2));

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// chaining - цепочка викликів
const numResult = num2
  .filter((num) => num > 5)
  .map((num) => num * 2)
  .sort((a, b) => b - a);
console.log(numResult);

const onlineAndSort = players
  .filter((player) => player.online)
  .sort((a, b) => a.timePlated - b.timePlated);
console.log(onlineAndSort);
