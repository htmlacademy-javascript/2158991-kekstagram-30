import { isValid, resetValidation } from './validate.js';
import { resetEffect } from './slider-effects.js';
import { sendPictures } from './api.js';

const form = document.querySelector('.img-upload__form');
const input = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const submitButton = document.querySelector('#upload-submit');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

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

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled ? 'Отправляю...' : 'Опубликовать';
};

const hideMessage = () => {
  const element = document.querySelector('.error') || document.querySelector('.success');
  element.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onBodyClick);
};

function onBodyClick (evt) {
  if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }
  hideMessage();
}

const onCloseButtonClick = () => hideMessage();

export const showSuccessMessage = () => {
  document.body.append(successMessage);
  document.body.addEventListener('click', onBodyClick);
  successMessage.querySelector('.success__button').addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

export const showErrorMessage = () => {
  document.body.append(errorMessage);
  document.body.addEventListener('click', onBodyClick);
  errorMessage.querySelector('.error__button').addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();

  if (isValid()){

    try {
      toggleSubmitButton(true);
      await sendPictures(new FormData(form));
      closeModal();
      showSuccessMessage();
    } catch {
      showErrorMessage();
    } finally {
      toggleSubmitButton();
    }

  }

});

input.addEventListener('change', onFileInputChange);
form.addEventListener('reset', onResetForm);
