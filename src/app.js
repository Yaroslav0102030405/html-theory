// const express = require('express');
// const exhbs = require('express-handlebars');

// const app = express();

// app.set('view engine', 'hbs');
// app.engine('hbs', exhbs({ extname: 'hbs' }));
// // app.set('views', './views');

// app.get('/', (req, res) => {
//   // console.log('Это колбек ("/")');
//   // res.send('<h1>Привет!</h1>');
//   res.render('home');
// });

// app.get('/about', (req, res) => {
//   // console.log('Это колбек /about');
//   res.render('about');
// });

// app.listen(4444, () => {
//   console.log(`Server ${4444}`);
// });

console.log('Начало');
try {
  console.log('В середине');
  dsdsd;
} catch (error) {
  console.log(error.message);
  console.log('Ошибка');
}
console.log('После');

const validJson = '{ "name": "Mango", "age": 20 }';
const invalidJson = '{"бекенд вернул такое чудо"}';

console.log(JSON.parse(validJson));
// console.log(JSON.parse(invalidJson));
console.log('Начало');
try {
  console.log(JSON.parse(validJson));
  console.log('Середина');
} catch (error) {
  console.log(error.message);
}

console.log('После');
try {
  JSON.parse(invalidJson);
} catch (error) {
  if (error.name === 'SyntaxError') {
    console.log('Ошибка парса JSON');
  }
}
console.log('После');

function getFruits(name) {
  const fruits = { strawberry: '🍓', kiwi: '🥝', apple: '🍎' };

  return new Promise((resolve) => setTimeout(() => resolve(fruits[name]), 500));
}

async function makeSmoothie() {
  // console.time('makeSmoothie');
  // последоательные запросы
  // const apple = await getFruits('apple');
  // console.log(apple);

  // const kiwi = await getFruits('kiwi');
  // console.log(kiwi);
  // console.timeEnd('makeSmoothie');

  // паралельные запросы сразу за всеми
  try {
    console.time('makeSmoothie');
    const apple = getFruits('apple');
    const kiwi = getFruits('kiwi');
    const berry = getFruits('strawberry');

    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);
    console.timeEnd('makeSmoothie');

    return fruits;
  } catch (error) {
    console.log(error);
  }
}

makeSmoothie().then((fruits) => console.log(fruits));

//
const BASE_URL = 'http://localhost:4040';

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json ' },
    body: JSON.stringify(book),
  };

  const response = await fetch(`${BASE_URL}/posts`, options);
  const newBook = await response.json();

  return newBook;
}

// addBook().then().catch();

async function addBookAndUpdateUi() {
  try {
    const book = await addBook({
      title: 'a title',
      views: 100,
      author: 'Арнольд',
      rating: 8.94,
    });
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}

addBookAndUpdateUi();

// addBook({
//   title: 'a title',
//   views: 100,
//   author: 'Арнольд',
//   rating: 8.94,
// })
//   .then((book) => console.log(book))
//   .catch((error) => console.log(error));

// function renderBook(book) {
//   console.log('Прийшла відповідь від бекенду і можна малювати');
//   console.log(book);
// }

async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/posts`);
  const book = await response.json();

  return book;
}

async function fetchBooksId(booksId) {
  const response = await fetch(`${BASE_URL}/posts/${booksId}`);
  const book = await response.json();

  return book;
}

// fetchBooks();
// fetchBooksId(2);
