import { showBigPicture } from './big-picture';

const renderPicture = ({ url, description, likes, comments, id }) => {
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);

  photoTemplate.querySelector('.picture__img').src = url;
  photoTemplate.querySelector('.picture__img').alt = description;
  photoTemplate.querySelector('.picture__likes').textContent = likes;
  photoTemplate.querySelector('.picture__comments').textContent = comments.length;
  photoTemplate.dataset.photoId = id;

  return photoTemplate;
};

const renderPictures = (photos) => {
  const container = document.querySelector('.pictures');

  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-photo-id]');
    if (!thumbnail) {
      return;
    }
    evt.preventDefault();
    const photoId = +thumbnail.dataset.photoId;
    const photoData = photos.find(({id}) => id === photoId);

    showBigPicture(photoData);
  });

  photos.forEach((item) => {
    container.appendChild(renderPicture(item));
  });
};

export {renderPictures};
