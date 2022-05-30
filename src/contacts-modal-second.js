(() => {
  const refs = {
    openModalBtn: document.querySelector('.btn-filter--second'),
    closeModalBtn: document.querySelector('.modal-second_button-close'),
    modal: document.querySelector('.backdrop__second-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
