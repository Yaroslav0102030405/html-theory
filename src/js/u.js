const BASE_URL = 'http://localhost:4040';

function updateBookId(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json ' },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/posts/${bookId}`, options).then((res) =>
    res.json()
  );
}

updateBookId(
  { title: 'a title', views: 100, author: 'Арнольд', rating: 8.94 },
  1
);
