import {isValid, resetValidation} from './validate.js';
import { resetEffect } from './slider-effects.js';

const form = document.querySelector('.img-upload__form');
const input = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const cancelUpload = form.querySelector('.img-upload__cancel');


const openModal = () => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onFileInputChange = () => {
  openModal();
  document.addEventListener('keydown', onDocumentKeydown);
};

const onCloseModal = () => {
  closeModal();
  resetEffect();
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  const isInputFocused = document.activeElement === form.querySelector('.text__hashtags') || document.activeElement === form.querySelector('.text__description');

  if (evt.key === 'Escape' && !isInputFocused) {
    evt.preventDefault();
    onCloseModal();
  }
}

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  isValid();
  resetValidation();
});

input.addEventListener('change', onFileInputChange);
cancelUpload.addEventListener('click', onCloseModal);
