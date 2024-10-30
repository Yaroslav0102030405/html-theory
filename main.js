// Робота з числами
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
