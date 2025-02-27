export default class NewsApiService {
  constructor() {
    this.searchOuery = '';
    this.page = 1;
  }

  fetchArticles(searchOuery) {
    const options = {
      headers: {
        Authorization: '2b084a585a6744c9a99186e76694f8db',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchOuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then((r) => r.json())
      .then((data) => {
        this.incrementPage();

        return data.articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchOuery;
  }

  set query(newQuery) {
    this.searchOuery = newQuery;
  }
}
