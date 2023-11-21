import {renderComments} from './render-comments';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bodyElement = document.querySelector('body');
const bigPictureCancel = document.querySelector('.big-picture__cancel');

const renderBigPicture = ({url, description, likes, comments}) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;

  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
};

const hidePicture = () => {
  bigPicture.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown',onDocumentKeydown);
};

const onClosePictureButton = () => {
  hidePicture();
};

function onDocumentKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hidePicture();
  }
}

const showBigPicture = (photoData) => {
  renderBigPicture(photoData);
  renderComments(photoData);

  bigPicture.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);

  bigPictureCancel.addEventListener('click', onClosePictureButton);
};

export {showBigPicture};
