import { isValid, resetValidation } from './validate.js';
import { resetEffect } from './slider-effects.js';
import { sendPictures } from './api.js';
import {showSuccessMessage, showErrorMessage} from './message-handler.js';
import './scale-picture.js';
import './new-picture.js';

const form = document.querySelector('.img-upload__form');
const input = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const submitButton = document.querySelector('#upload-submit');

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
  resetEffect();
  closeModal();
  toggleClasses(false);
  resetValidation();
  onCloseImageButtonClick();
};

function onCloseImageButtonClick() {
  input.value = '';
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown (evt) {
  const isError = document.querySelector('.error');
  const isInputFocused = document.activeElement === form.querySelector('.text__hashtags') || document.activeElement === form.querySelector('.text__description');

  if (evt.key === 'Escape' && !isInputFocused && !isError) {
    evt.preventDefault();
    onCloseImageButtonClick();
    onResetForm();
  }
}

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled ? 'Отправляю...' : 'Опубликовать';
};

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  if (isValid()){

    try {
      toggleSubmitButton(true);
      await sendPictures(new FormData(form));
      showSuccessMessage();
      onResetForm();
    } catch {
      showErrorMessage();
    } finally {
      toggleSubmitButton();
    }

  }

});

input.addEventListener('change', onFileInputChange);
form.addEventListener('reset', onResetForm);
