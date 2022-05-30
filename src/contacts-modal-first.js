(() => {
  const refs = {
    openModalBtn: document.querySelector('.button-filter-first'),
    closeModalBtn: document.querySelector('.modal-first_button-close'),
    modal: document.querySelector('.backdrop__first-modal'),
    body: document.querySelector(".body"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle('is-hidden');
  }
})();
