import { debounce } from './util.js';
import { renderPictures } from './render-photos';

const MAX_RANDOM_FILTER = 10;
const RERENDER_DELAY = 500;
const ACTIVE_CLASS = 'img-filters__button--active';

const imgFilter = document.querySelector('.img-filters');
const filterForm = imgFilter.querySelector('.img-filters__form');

const getFilters = (pictures) => ({
  default: pictures,
  random: pictures.sort(() => Math.random() - 0.5).slice(0, MAX_RANDOM_FILTER),
  discussed: pictures.sort((firstElement, secondElement) => (firstElement.comments.length - secondElement.comments.length)),
});

const clearContainer = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((item) => item.remove());
};

const reRender = debounce((filter, data) => {
  clearContainer();
  renderPictures(getFilters(data)[filter]);
}, RERENDER_DELAY);

const showFilter = (data) => {
  imgFilter.classList.remove('img-filters--inactive');

  filterForm.addEventListener('click', (event) => {
    const target = event.target;
    const activeButton = document.querySelector('.img-filters__button--active');

    if (!target.classList.contains('img-filters__button') || target === activeButton) {
      return;
    }
    activeButton.classList.remove(ACTIVE_CLASS);
    target.classList.add(ACTIVE_CLASS);

    if (target.classList.contains('img-filters__button')) {
      const filterType = target.id.replace('filter-', '');
      reRender(filterType, data);
    }
  });
};

export { showFilter };
