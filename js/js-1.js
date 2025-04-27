const age = 10;
const aage2 = 10.12;

const name = 'Yaroslav';
const name0 = '0123Yara';

const bull = false;

const n = null;

let l;

let id1 = Symbol('foo');
console.log(id1);

const ob = {};
const a = [];
const f = function () {};

let bigInt = 19241924124n;
console.log(bigInt);

console.log(typeof age);
console.log(typeof aage2);
console.log(typeof name0);
console.log(typeof bull);
console.log(typeof n);
console.log(typeof l);
console.log(typeof ob);
console.log(typeof a);
console.log(typeof f);

const USER_NAME = 'Rita';
console.log(USER_NAME);

// const a1 ❌
// const a1 = 2; ✅

// методи для строк
// парсит ціле число
const elementWidth = '12px';
const result = Number.parseInt(elementWidth);
console.log(result);

// парсіт дробне число
const elHeidht = '15.0123px';
const res2 = Number.parseFloat(elHeidht);
console.log(res2);
const elH = '20.332';
const res3 = Number(elH);
console.log(res3);

let salary = 30.1233;
salary = Number(salary.toFixed(2));
console.log(salary);

// let base = prompt('Число');
// base = Number(base);
// console.log(base);

// let power = prompt('Степень');
// power = Number(power);
// console.log(power);

// const res1 = base + power;
// console.log(res1);
// alert(res1);

const colors = ['red', 'black', 'orange'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);

const color = colors[index];

document.body.style.backgroundColor = color;

console.log(color);

// методи для строк

// длина строкі
const message = 'В этой строке 26 символов.';
console.log(message.length);

// конкатенація строк
const firstName = 'Yara';
const lastName = 'Lukov';

const fullName = firstName + ' ' + lastName;
console.log(fullName);

// Шаблоні строки
const quantity = 5;
const orderMsg = `Ви замовили ${quantity} холоильників`;
console.log(orderMsg);

// Нормалізація ввода
const brand = 'Sumsung';
const brandUpperCase = brand.toUpperCase();
console.log(brandUpperCase);
const b = brand.toLowerCase();
console.log(b);

let brand2 = 'SumsUNG';
brand2 = brand2[0].toLowerCase() + brand2.slice(1).toLowerCase();
console.log(brand2);

// пошук в строке
const wordl = 'спам';

const string = 'Я не Спам';
const res8 = string.toLowerCase().includes(wordl);
console.log(res8);

//
const sub = 'free';

const canAccessConten = sub === 'pro' || sub === 'vip';
console.log('Є доспвт до контенту?', canAccessConten);

// код по условію
const balance = 1000;
let message2 = '';

if (balance > 0) {
  message2 = 'Позитивний баланс';
} else {
  message2 = 'Негативний';
}
console.log(message2);

// тернарний оператор
const message3 = balance > 0 ? 'Позитивний' : 'Негативний';
console.log(message3);

const salary1 = 800;

if (salary1 <= 500) {
  console.log('Рівень 1');
} else if (salary1 > 500 && salary1 > 700) {
  console.log('Рівень 2');
}

// Область відимості
// Глобальна блочна і функціональна
