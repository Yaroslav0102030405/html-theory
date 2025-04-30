const a = document.querySelector('uldsds');
console.log(a);

const link = document.querySelectorAll('.link');
console.log(link);

const titleRef = document.querySelector('.title');
console.log(titleRef.textContent);

titleRef.addEventListener('click', () => {
  titleRef.textContent = 'Супер!';
});

const imageRef = document.querySelector('.image');
console.log(imageRef.src);
console.log(imageRef.getAttribute('src'));
console.log(imageRef.hasAttribute('src'));
imageRef.removeAttribute('src');

// console.log(titleRef.classList);
// titleRef.classList.add('cool');
// console.log(titleRef.classList);
// titleRef.classList.remove('cool');
// console.log(titleRef.classList);
// console.log(titleRef.classList.contains('cool'));

titleRef.addEventListener('click', () => {
  titleRef.classList.toggle('cool');
  console.log(titleRef.classList.contains('cool'));
});

const ulRef = document.querySelector('.im');

console.log(ulRef.children);
console.log(ulRef.firstElementChild);
console.log(ulRef.children[1]);
console.log(ulRef.lastElementChild);

const titleEl = document.createElement('h2');
titleEl.classList.add('super');
titleEl.textContent = 'Новий елемент';

document.body.append(titleEl);

const liRef = document.createElement('li');
liRef.classList.add('super');

const aRef = document.createElement('a');
aRef.href = './profile';
aRef.textContent = 'Особистий кабінет';

liRef.appendChild(aRef);

const navRef = document.querySelector('.nav-list');

navRef.insertBefore(liRef, navRef.children[3]);

const colorpickerOptions = [
  { label: 'red', color: '#DFFF00' },
  { label: 'blue', color: '#6495ED' },
  { label: 'green', color: '#9FE2BF' },
];

const containerRef = document.querySelector('.btn-container');

const makeColorOptions = (options) => {
  return colorpickerOptions.map((option) => {
    const btnRef = document.createElement('button');
    btnRef.type = 'button';
    btnRef.textContent = option.label;
    btnRef.style.backgroundColor = option.color;

    return btnRef;
  });
};

const elements = makeColorOptions(colorpickerOptions);

containerRef.append(...elements);

import transationData from '../data.js';
// console.log(transationData);

const markupTransactionData = ({ id, sum, data, name, amount }) => {
  return ` <tr>
    <th>${id}</th>
    <th>${sum}</th>
    <th>${data}</th>
    <th>${name}</th>
    <th>${amount}</th>
  </tr>`;
};

markupTransactionData(transationData);
console.log(markupTransactionData);

const tableEl = document.querySelector('.js-table');

const transactionTableRows = transationData.map(markupTransactionData).join('');

tableEl.insertAdjacentHTML('beforeend', transactionTableRows);
console.log(transactionTableRows);
