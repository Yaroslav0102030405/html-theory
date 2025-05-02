const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'REACT' },
  { label: 'NODE' },
  { label: 'JAVASCRIPT' },
];

const refs = {
  list: document.querySelector('.js-list'),
  input: document.querySelector('#filter'),
};

const listItemsMarkup = createListMarkup(tech);
refs.list.innerHTML = listItemsMarkup;

refs.input.addEventListener('input', _.debounce(onFilter, 300));

function onFilter(e) {
  const filter = e.target.value.toLowerCase();

  const filteredItems = tech.filter((t) =>
    t.label.toLowerCase().includes(filter)
  );
  console.log(filteredItems);
  const listItemsMarkup = createListMarkup(filteredItems);
  refs.list.innerHTML = listItemsMarkup;
}

function createListMarkup(items) {
  return items
    .map((item) => {
      return `<li>${item.label}</li>`;
    })
    .join('');
}
