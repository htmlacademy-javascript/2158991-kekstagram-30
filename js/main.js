import { renderPictures } from './render-photos';
import { loadPictures, showError } from './api.js';
import { showFilter } from './filters.js';
import './form.js';
import './scale-picture.js';
import './new-picture.js';

try {
  const pictures = await loadPictures();
  renderPictures(pictures);
  showFilter(pictures);
} catch (err) {
  showError();
}
