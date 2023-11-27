const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [Method.GET]: 'Данные с сервера не были получены',
  [Method.POST]: 'Не удалось отправить данные формы на сервер',
};

const request = async (url, method = Method.GET, body = null) => {
  const response = await fetch(url, { method, body });
  if (!response.ok) {
    throw new Error(ErrorText[method]);
  }
  return response.json();
};

const loadPictures = async () => request(SERVER_URL + Route.GET_DATA);

const sendPictures = async (pictureData) => request(SERVER_URL + Route.SEND_DATA, Method.POST, pictureData);

const showError = () => {
  const error = document.querySelector('#data-error').content.querySelector('.data-error').cloneNode(true);
  document.body.append(error);

  setTimeout(() => {
    error.remove();
  }, 4000);
};

export {loadPictures, sendPictures, showError};
