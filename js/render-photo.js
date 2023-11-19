
const renderPicture = (picture) => {

  const container = document.querySelector('.pictures');
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture').cloneNode(true);

  photoTemplate.querySelector('.picture__img').src = picture.url;
  photoTemplate.querySelector('.picture__img').alt = picture.description;
  photoTemplate.querySelector('.picture__likes').textContent = picture.likes;
  photoTemplate.querySelector('.picture__comments').textContent = picture.comments.length;

  container.appendChild(photoTemplate);
};

const renderPictures = (photos) => {
  photos.forEach((item) => {
    renderPicture(item);
  });
};

export {renderPictures};

