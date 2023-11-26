import { renderPictures } from './render-photos';
import { loadPictures, showError } from './api.js';
import './form.js';
import './scale-picture.js';

try {
  const pictures = await loadPictures();
  renderPictures(pictures);
} catch (err) {
  showError();
}
