'use strict';
//defining variables
const modal = document.querySelector('.modal'); // we store object in a variable, to be able more easly select that obect
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//defining functions
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

//opening modal window after clicking on a button
for( let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);

//closing modal window after clicling x, around the modal window and Escape key
btnCloseModal.addEventListener('click', closeModal); //nie wywołujemy tutaj tej funkcji w ten sposób: closeModal(), bo wtedy byłaby ona wywołana po otworzeniu strony
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal()
    }
});