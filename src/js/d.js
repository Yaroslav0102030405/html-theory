const BASE_URL = 'http://localhost:4040';

function removeBookId(bookId) {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/posts/${bookId}`, options).then((res) =>
    res.json()
  );
}

removeBookId(1);
