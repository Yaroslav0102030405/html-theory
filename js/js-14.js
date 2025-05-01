const formRef = document.querySelector('.js-form');
const inputRef = document.querySelector('.input');
const checkboxRef = document.querySelector('.checkbox1');
const btnRef = document.querySelector('.btn1');

formRef.addEventListener('submit', onFormSubmit);
inputRef.addEventListener('input', onFormInput);
checkboxRef.addEventListener('change', onChange);

function onChange(e) {
  console.log('click');
  //   console.log(e.currentTarget.checked);
  btnRef.disabled = !e.currentTarget.checked;
}

function onFormInput(e) {
  console.log(e.currentTarget.value);
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log('click');

  console.log(e);
  console.log(e.currentTarget.elements);

  const formData = new FormData(e.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log(value, name);
  });
}

// modal
const openModalRef = document.querySelector('.btn-1');
const closeModalRef = document.querySelector('.btn-2');
const backdropRef = document.querySelector('.backdrop-1');

openModalRef.addEventListener('click', onOpenModal);
backdropRef.addEventListener('click', onBackdrop);
closeModalRef.addEventListener('click', onCloseModal);

function onOpenModal() {
  window.addEventListener('keydown', onKeyDown);
  backdropRef.classList.remove('is-hidden-1');
  document.body.classList.add('show-modal-1');
}

function onCloseModal() {
  window.removeEventListener('keydown', onKeyDown);
  backdropRef.classList.add('is-hidden-1');
  document.body.classList.remove('show-modal-1');
}

function onBackdrop(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onKeyDown(e) {
  console.log(e);
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
//
