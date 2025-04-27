const stars = 2;
let price;

switch (stars) {
  case 1:
    price = '20$';
    break;
  case 2:
    price = '30$';
    break;
  case 3:
    price = '50$';
    break;
  case 4:
    price = '70$';
    break;

  case 5:
    price = '120$';
    break;

  default:
    price = 'Такої кількості зірок не має';
}

console.log(price);

const options = 3;
let msg;

switch (options) {
  case 1:
    msg = 'Ви можете забрати товар завтра з 12:00 до 18:00 у нашому офісі';
    break;
  case 2:
    msg = 'Кур`єр доставить ваше замовлення завтра з 9:00 до 18:00 ';
    break;
  case 3:
    msg = 'Посилка буде відправленна сьогодні';
    break;

  default:
    price = 'Вам передзвонить менеджер';
}

console.log(msg);

// цикл for
const minSalary = 500;
const maxSalary = 1000;
const employees = 10;
let totalSalary = 0;

for (let i = 0; i <= employees; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + maxSalary
  );
  console.log(`ЗП працівника номер ${i} - ${salary}`);

  totalSalary += salary;
}

console.log(totalSalary);

const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i += 1) {
  if (i % 2 !== 0) {
    console.log('Не четное:', i);
    continue;
  }

  console.log('четное:', i);
  total += i;
}
console.log(total);

// let balance = 10000;
// const payment = 4000;

// if (payment <= balance) {
//   balance -= payment;
//   console.log(`На счету залишилось ${balance} кредитов`);
// } else {
//   console.log('Недостаточно средств');
// }
// console.log('Операція завершена');

let totalSpent = 5000;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Знижка 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Знижка 5%');
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log('Знижка 10%');
  discount = 0.1;
} else {
  console.log('Не партнер знажка 0%');
}

payment -= payment * discount;
console.log(
  `Оформляємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`
);

totalSpent += payment;

console.log(`Загальна сума потрачена в магазині: ${totalSpent}`);
