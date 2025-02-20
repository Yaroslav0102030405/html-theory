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

// lesson 15
const containerRef = document.querySelector('.js-container2');
containerRef.addEventListener('click', onClick);

function onClick(e) {
  // console.log(e.target);
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(e.target.textContent);
}

// Добавить кнопку
const btnAdd = document.querySelector('.btn__add');
const btnRemove = document.querySelector('.btn__remove');
let labelCounter = 5;

btnAdd.addEventListener('click', onAddBtnClick);
btnRemove.addEventListener('click', onBtnRemove);

function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';

  containerRef.appendChild(btn);
  labelCounter += 1;
}

function onBtnRemove() {
  // btnAdd.remove();

  if (labelCounter > 1) {
    containerRef.lastElementChild.remove();
    labelCounter -= 1;
  } else {
    return;
  }
}

//
const tagsContainer = document.querySelector('.js-list');
let selectedTag = [];
// let selectedTag = new Set();
tagsContainer.addEventListener('click', onTagContainerClick);

function onTagContainerClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  const isActiveButton = e.target.classList.contains('tags-active');

  if (isActiveButton) {
    // selectedTag.delete(e.target.dataset.value);
    selectedTag.pop(e.target.dataset.value);
  } else {
    // selectedTag.add(e.target.dataset.value);
    selectedTag.push(e.target.dataset.value);
  }

  // пошук активної кнопки
  // const currentActiveButton = document.querySelector('.tags-active');
  // currentActiveButton?.classList.remove('tags-active');
  e.target.classList.toggle('tags-active');

  // додаємо клас
  // e.target.classList.add('tags-active');

  console.log(selectedTag);
}

// динамычна розмытка карточок
const colors1 = [
  { hex: '#ff4000', rgb: 'rgb(255, 64, 0)' },
  { hex: '#ffff00', rgb: 'rgb(255, 255, 0)' },
  { hex: '#bfff00', rgb: 'rgb(191, 255, 0)' },
];

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorsCardMarkup(colors1);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainer.addEventListener('click', onContainerClick);

function onContainerClick(e) {
  const isColor = e.target.classList.contains('color');
  if (!isColor) {
    return;
  }

  // const currentActiveCard = document.querySelector('.color-card.is-active');
  // if (currentActiveCard) {
  //   currentActiveCard.classList.remove('is-active');
  // }

  const parentColorCard = e.target.closest('.color-card');

  // parentColorCard.classList.add('is-active');
  removeActiveCaardClass();
  addActiveCardClass(parentColorCard);
  // document.body.style.backgroundColor = e.target.dataset.hex;
  setBodyBgColor(e.target.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCaardClass() {
  const currentActiveCard = document.querySelector('.color-card.is-active');
  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}

function createColorsCardMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return ` <li>
    <div class="div color color-card"
    data-hex="${hex}" 
    data-rgb="${rgb}" 
    style="background-color: ${hex}">
    </div>
    <div>
      <p>HEX: ${hex}</p>
      <p>RGB: ${rgb}</p>
    </div>
  </li>`;
    })
    .join('');
}
console.log(createColorsCardMarkup(colors1));
