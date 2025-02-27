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

// 2b084a585a6744c9a99186e76694f8db
// import onSearch from './onSearch';

import NewsApiService from './new-service';

const newsApiService = new NewsApiService();

const refs = {
  searchForm: document.querySelector('.form'),
  articlesContainer: document.querySelector('.articles'),
  loadMoreBtn: document.querySelector('.btn-label'),
};

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  clearArticlesContainer();
  newsApiService.query = e.currentTarget.elements.query.value;
  newsApiService.resetPage();
  newsApiService.fetchArticles().then((articles) => {
    // refs.articlesContainer.innerHTML = appendArticlesMarkup(articles);
    refs.articlesContainer.insertAdjacentHTML(
      'beforeend',
      appendArticlesMarkup(articles)
    );
    console.log(articles);
  });
}

function onLoadMore() {
  newsApiService.fetchArticles().then((articles) => {
    // refs.articlesContainer.innerHTML = appendArticlesMarkup(articles);
    refs.articlesContainer.insertAdjacentHTML(
      'beforeend',
      appendArticlesMarkup(articles)
    );

    console.log(articles);
  });
}

function appendArticlesMarkup(articles) {
  return articles.map((article) => {
    return `<li style="width: 300px; border: 1px solid black; padding: 10px">
    <a href="${article.url}" target="_blank" rel="noopener noreferrer">
    <img width="300" src="${article.urlToImage}" />
<h1>${article.title}</h1>
<p>${article.description}</p>
</a>
</li>`;
  });
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
