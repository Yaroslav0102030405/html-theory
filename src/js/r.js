const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
  fetch(`${BASE_URL}/posts`).then((response) => response.json());
}

function fetchBooksId(booksId) {
  fetch(`${BASE_URL}/posts/${booksId}`).then((response) => response.json());
}
console.log(fetchBooks());
console.log(fetchBooksId(2));
