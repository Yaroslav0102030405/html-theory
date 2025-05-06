// method GET
// const BASE_URL = 'http://localhost:3000';

// const onPosts = (params) => {
//   fetch(`${BASE_URL}/posts`).then((r) => r.json());
// };

// const onPost = (postId) => {
//   fetch(`${BASE_URL}/${postId}`).then((r) => r.json());
// };

// onPosts();
// onPost(1);
// onPost(2);

// method POST
// const newPost = {
//   title: 'new title 222',
//   views: 100,
// }

// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(newPost),
// };

// const addPost = (newPost) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
//   };
//   return fetch('http://localhost:3000/posts', options)
//     .then((res) => res.json())
//     .then(console.log);
// };

// addPost({
//   title: 'new title 333',
//   views: 100,
// });

// addPost({
//   title: 'new title 444',
//   views: 100,
// });

// method PATCH
// const updatePost = (update, postId) => {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };
//   return fetch(`http://localhost:3000/posts/${postId}`, options)
//     .then((res) => res.json())
//     .then(console.log);
// };
// updatePost(
//   {
//     title: 'Большая тестовая книга HTML',
//   },
//   1
// );

// method DELETE

// const removePost = (postId) => {
//   const options = {
//     method: 'DELETE',
//   };
//   return fetch('http://localhost:3000/posts', options).then((res) => res.json);
// };

// removePost(2);
