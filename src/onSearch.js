// export default function onSearch(e) {
//   e.preventDefault();

//   const searchOuery = e.currentTarget.elements.query.value;

//   const options = {
//     headers: {
//       Authorization: '2b084a585a6744c9a99186e76694f8db',
//     },
//   };

//   const url = `https://newsapi.org/v2/everything?q=${searchOuery}&language=en&pageSize=5&page=1`;

//   fetch(url, options)
//     .then((r) => r.json())
//     .then(console.log);
// }
