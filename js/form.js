import {isValid, resetValidation} from './validate.js';
import { resetEffect } from './slider-effects.js';

const form = document.querySelector('.img-upload__form');
const input = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');

const toggleClasses = (willBeOpened = true) => {
  overlay.classList.toggle('hidden', !willBeOpened);
  document.body.classList.toggle('modal-open', willBeOpened);
};

const onFileInputChange = () => {
  toggleClasses();
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = () => form.reset();

const onResetForm = () => {
  toggleClasses(false);
  resetEffect();
  resetValidation();
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  const isInputFocused = document.activeElement === form.querySelector('.text__hashtags') || document.activeElement === form.querySelector('.text__description');

  if (evt.key === 'Escape' && !isInputFocused) {
    evt.preventDefault();
    onResetForm();
  }
}

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  if (isValid()){
    closeModal();
  }
});

input.addEventListener('change', onFileInputChange);
form.addEventListener('reset', onResetForm);
