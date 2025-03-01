const BASE_URL = 'http://localhost:4040';

// const newBook = {
//   title: 'a title',
//   views: 100,
//   author: 'Арнольд',
//   rating: 8.94,
// };

function addBook(book) {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json ' },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/posts`, options).then((res) => res.json());
}

addBook({
  title: 'a title',
  views: 100,
  author: 'Арнольд',
  rating: 8.94,
})
  .then(renderBook)
  .catch((error) => console.log(error));

function renderBook(book) {
  console.log('Прийшла відповідь від бекенду і можна малювати');
  console.log(book);
}
