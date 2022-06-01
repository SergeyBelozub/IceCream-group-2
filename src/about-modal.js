(() => {
  const refs = {
    openModalBtn: document.querySelector('.about__btn'),
    closeModalBtn: document.querySelector('.about__form__btn'),
    modal: document.querySelector('.about__backdrop'),
    body: document.querySelector(".body"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle('is-hidden');
  }
})();

