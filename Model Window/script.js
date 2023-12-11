'use strict';
const modal = document.querySelector('.modal');
const overly = document.querySelector('.overly');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);
const closeModal = function () {
  modal.classList.add('hidden');
  overly.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overly.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overly.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
