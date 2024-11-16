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
const colors = ['red', 'green', 'blue'];
// Індекс останього числа
const max = colors.length - 1;
const min = 0;
// Математична операція яка повертає з масиву випадковий індекс
const index = Math.round(Math.random() * (max - min) + min);
// індекс перетворюємо на колір
const color = colors[index];
console.log(color);
// Звертаємося до DOM та на боді додаємо випадковий колір фону
document.body.style.backgroundColor = color;

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
