const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const app = express();

app.use(express.static('public'));

app.engine('.hbs', exhbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
// app.set('views', './views');

app.get('/', (req, res) => {
  res.render('home', {
    cssFileName: 'about',
    productsTitle: 'Головна сторінка',
  });
});

app.get('/about', (req, res) => {
  res.render('about', { cssFileName: 'about', productsTitle: 'О нас' });
});

app.get('/products', (req, res) => {
  res.render('products', {
    products,
    cssFileName: 'products',
    productsTitle: 'Наши продукти',
  });
});

app.get('/product/:productId', (req, res) => {
  const product = products.find((p) => p.id === req.params.productId);
  res.render('product', { product });
});

app.listen(4444, () => {
  console.log('server 4444');
});
