const API_KEY = '2b084a585a6744c9a99186e76694f8db';

// const options = {
//   headers: { Authorization: API_KEY },
// };

let searchForm = '';
let page = 1;

const refs = {
  formRef: document.querySelector('.js-form-13'),
  containerRef: document.querySelector('.js-container-13'),
  btnRef: document.querySelector('.js-btn-13'),
  loadMore: document.querySelector('.js-load-more'),
};

refs.formRef.addEventListener('submit', onSearchForm);
refs.loadMore.addEventListener('click', onLoadMore);

function onSearchForm(e) {
  e.preventDefault();

  clearArticlesContainer();
  searchForm = e.currentTarget.elements.query13.value;
  page = 1;

  if (searchForm === '') {
    return alert('Ведіть щось нормальне');
  }
  //   refs.loadMore.classList.add('load-13');
  //   refs.loadMore.textContent = 'Загружаємо';
  //   refs.loadMore.disabled = true;
  const url = `https://newsapi.org/v2/everything?q=${searchForm}&from=2025-04-06&sortBy=publishedAt&pageSize=5&page=${page}&apiKey=${API_KEY}`;
  //   const url2 = `https://newsapi.org/v2/top-headlines?country=${searchForm}&category=business&pageSize=5&page=${page}&apiKey=${API_KEY}`;
  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      page += 1;
      //   refs.loadMore.classList.add('load-13');
      //   refs.loadMore.textContent = 'Показати ще...';
      //   refs.loadMore.disabled = false;
      return data.articles;
    })
    .then(appendArticlesMarkup)
    .catch((error) => console.log(error));
}

function onLoadMore() {
  //   refs.loadMore.classList.add('load-13');
  //   refs.loadMore.textContent = 'Загружаємо';
  //   refs.loadMore.disabled = true;
  const url = `https://newsapi.org/v2/everything?q=${searchForm}&from=2025-04-06&sortBy=publishedAt&pageSize=5&page=${page}&apiKey=${API_KEY}`;
  //   const url2 = `https://newsapi.org/v2/top-headlines?country=${searchForm}&category=business&pageSize=5&page=${page}&apiKey=${API_KEY}`;
  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      page += 1;
      //   refs.loadMore.classList.add('load-13');
      //   refs.loadMore.textContent = 'Показати ще...';
      //   refs.loadMore.disabled = false;
      return data.articles;
    })
    .then(appendArticlesMarkup)
    .catch((error) => console.log(error));
}

function appendArticlesMarkup(articles) {
  refs.containerRef.insertAdjacentHTML(
    'beforeend',
    onRenderPokemonCard(articles)
  );
}

function onRenderPokemonCard(articles) {
  const markup = articles.map(({ urlToImage, title }) => {
    return `<li class='card-2'>
  <img  src='${urlToImage}' alt='${title}' width="300" />
  <div >
    <h2>${title}</h2>
  </div>
</li>`;
  });
  return markup;
}

function clearArticlesContainer() {
  refs.containerRef.innerHTML = '';
}
