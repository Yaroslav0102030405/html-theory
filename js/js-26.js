const getFruits = async (name) => {
  const fruits = {
    kiwi: '🥝',
    apple: '🍎',
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fruits[name]);
    });
  }, 500);
};

async function makeSmoothie(params) {
  //   const apple = await getFruits('apple');
  //   console.log(apple);
  //   const kiwi = await getFruits('kiwi');
  //   console.log(kiwi);

  try {
    const apple = getFruits('apple');
    const kiwi = getFruits('kiwi');

    const fruits = await Promise.all([apple, kiwi]);
    console.log(fruits);
  } catch (error) {
    console.Console.log(error);
  }
}

makeSmoothie();

// method GET
// const BASE_URL = 'http://localhost:3000';

// const onPosts = async (params) => {
//   const response = await fetch(`${BASE_URL}/posts`);
//   const res = await response.json();

//   return res;
// };

// const onPost = async (postId) => {
//   const response = await fetch(`${BASE_URL}/${postId}`);
//   const res = await response.json();

//   return res;
// };

// onPosts();
// onPost(1);
// onPost(2);

// method POST
// const newPost = {
//   title: 'new title 222',
//   views: 100,
// };

// const addPost1 = async () => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
//   };
// };

// const addPost = async (newPost) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newPost),
//   };
//   const resolse = await fetch('http://localhost:3000/posts', options);
//   const res = await resolse.json();

//   return res;
// };

// async function addPostUpdate(params) {
//   try {
//     const post = await addPost();
//   } catch (error) {
//     console.log(error);
//   }
// }

// addPostUpdate();

// addPost({
//   title: 'new title 333',
//   views: 100,
// });

// addPost({
//   title: 'new title 444',
//   views: 100,
// });
