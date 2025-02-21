const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.set('view engine', 'hbs');
app.engine('hbs', exhbs({ extname: 'hbs' }));
// app.set('views', './views');

app.get('/', (req, res) => {
  // console.log('Это колбек ("/")');
  // res.send('<h1>Привет!</h1>');
  res.render('home');
});

app.get('/about', (req, res) => {
  // console.log('Это колбек /about');
  res.render('about');
});

app.listen(4444, () => {
  console.log(`Server ${4444}`);
});
