// import throttle from 'lodash.throttle';

const user = {
  name: 'Yara',
  age: 40,
};

const userStringify = JSON.stringify(user);
console.log(userStringify);

const userParse = JSON.parse(userStringify);
console.log(userParse);

console.log(localStorage);

// localStorage.setItem('my-data', 'Hello!');
localStorage.setItem('my-data-2', JSON.stringify({ name: 'Yara', age: 40 }));

const savedData = localStorage.getItem('my-data-2');
console.log(savedData);

const parseData = JSON.parse(savedData);
console.log(parseData);

//
const refs = {
  form: document.querySelector('.js-form-12'),
  textarea: document.querySelector('.js-t'),
};

const formData = {};

const STORAGE_KEY = 'feedback-msg';
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', _.throttle(onTextarea, 500));
refs.form.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value;
  //   console.log(formData);

  //   const message = e.target.value;
  //   const message = JSON.stringify(formData);
  //   console.log(message);
});

populateTeaxarea();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextarea(e) {
  const message = e.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function populateTeaxarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
