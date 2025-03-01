const BASE_URL = 'http://localhost:4040';

function fetchBooks() {
  fetch(`${BASE_URL}/posts`).then((response) => response.json());
}

function fetchBooksId(booksId) {
  fetch(`${BASE_URL}/posts/${booksId}`).then((response) => response.json());
}
fetchBooks();
fetchBooksId(2);
