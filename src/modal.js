(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtn2: document.querySelector('[data-modal-mob-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('.body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeModal);

  function closeModal(e) {
    if (e.target === document.querySelector('.modal')) {
      refs.modal.classList.add('modal--is-hidden');
    }
  }
  function toggleModal() {
    refs.body.classList.toggle('no-scroll');
    refs.modal.classList.toggle('modal--is-hidden');
  }
})();

const otherRefs = {
  checkboxes: document.querySelectorAll('.form__choose'),
  productContainer: document.querySelector('.form__products'),
  formCard: document.querySelectorAll('.form__card'),
  quantity: document.querySelector('.quantity'),
  deleteBtn: document.querySelectorAll('.quantity__btn'),
};

otherRefs.productContainer.addEventListener('click', openQuantity);

function openQuantity(e) {
  if (e.target.nodeName === 'INPUT') {
    let currentIcon = e.target;
    if (currentIcon.checked) {
      const inputQuant = document.getElementById(currentIcon.name);
      currentIcon.parentNode.classList.add('form__card--checked');
      inputQuant.classList.remove('isHidden');
    } else {
      const inputQuant = document.getElementById(currentIcon.name);
      currentIcon.parentNode.classList.remove('form__card--checked');
      inputQuant.classList.add('isHidden');
    }
  }
}

for (let btn of otherRefs.deleteBtn) {
  btn.addEventListener('click', delQuant);
}

function delQuant(e) {
  e.preventDefault();
  e.target.parentNode.classList.add('isHidden');
  for (let checkbox of otherRefs.checkboxes) {
    if (checkbox.name === e.target.name) {
      checkbox.checked = false;
      checkbox.parentNode.classList.remove('form__card--checked');
    }
  }
}
