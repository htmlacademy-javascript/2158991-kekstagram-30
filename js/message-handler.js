import {onKeyDownEscape} from './util';

const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

function hideMessage () {
  const element = document.querySelector('.error') || document.querySelector('.success');

  element.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.removeEventListener('click', onBodyClick);
}

function onDocumentKeydown (evt) {
  if (onKeyDownEscape(evt)) {
    hideMessage();
  }
}

function onBodyClick (evt) {
  if (evt.target.closest('.success__inner') || evt.target.closest('.error__inner')) {
    return;
  }
  hideMessage();
}

const onCloseButtonClick = () => hideMessage();

const showSuccessMessage = () => {
  document.body.append(successMessage);
  document.body.addEventListener('click', onBodyClick);
  successMessage.querySelector('.success__button').addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

const showErrorMessage = () => {
  document.body.append(errorMessage);
  document.body.addEventListener('click', onBodyClick);
  errorMessage.querySelector('.error__button').addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

export {showSuccessMessage, showErrorMessage};
