const btnContainerRef = document.querySelector('.js-container-1');

btnContainerRef.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  console.log(e.target.textContent);
}

const tagsContainer = document.querySelector('.js-tags-1');
tagsContainer.addEventListener('click', onTagClick);
let selectedTag = [];
function onTagClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  //   console.log(e.target);

  const currentActivBtn = document.querySelector('.active-red');

  if (currentActivBtn) {
    currentActivBtn.classList.remove('active-red');
  } else {
    e.target.classList.add('active-red');
    selectedTag.push(e.target.textContent);
  }

  console.log(selectedTag);
}

const colors = [
  { hex: '#CD5C5C', rgb: '205, 92, 92' },
  { hex: '#DFFF00', rgb: '223, 255, 0' },
  { hex: '#6495ED', rgb: '100, 149, 237' },
  { hex: '#CCCCFF', rgb: '204, 204, 255' },
];

const paletteContainer = document.querySelector('.js-palette-container');
const cardsMarkup = createColorCardMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createColorCardMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
      <li class="color-card">
    <div class="c1" style="background-color: ${hex}"
    data-hex="${hex}">
    </div>
    <div class="color-swatch">
    <p>HEX: ${hex}</p>
    <p>RGB: ${rgb}</p>
  </div>
  </div>`;
    })
    .join('');
}

console.log(createColorCardMarkup);

paletteContainer.addEventListener('click', onClickColor);

function onClickColor(e) {
  if (!e.target.classList.contains('c1')) {
    return;
  }

  const currentActiveColor = document.querySelector('.color-card.is-active');

  if (currentActiveColor) {
    currentActiveColor.classList.remove('is-active');
  }

  //   e.target.classList.add('is-active-1');
  const parentColor = e.target.closest('.color-card');
  parentColor.classList.add('is-active');

  document.body.style.backgroundColor = e.target.dataset.hex;
  console.log(e.target);
}
