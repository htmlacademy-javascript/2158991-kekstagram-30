import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { EFFECT_OPTION_MAP } from './effect-map.js';
import { form } from './validate.js';
import { picture } from './scale-picture.js';

const CHANGE_EVENT = new Event('change');

const sliderEffect = document.querySelector('.img-upload__effect-level');
const sliderElement = sliderEffect.querySelector('.effect-level__slider');
const effectList = document.querySelector('.effects__list');

const slider = noUiSlider.create(sliderElement, EFFECT_OPTION_MAP.none.slider);

sliderEffect.hidden = true;

effectList.addEventListener('change', () => {
  const effect = form.effect.value;

  sliderEffect.hidden = effect === 'none';

  slider.updateOptions(EFFECT_OPTION_MAP[effect].slider, false);
});

slider.on('update', () => {
  const value = Number(slider.get());
  form['effect-level'].value = String(value);

  const currentEffect = form.effect.value;

  if (currentEffect === 'none') {
    return picture.style.removeProperty('filter');
  }

  const filter = EFFECT_OPTION_MAP[currentEffect].filter;
  picture.style.filter = filter(value);
});

const resetEffect = () => {
  form.effect.value = 'none';
  effectList.dispatchEvent(CHANGE_EVENT);
};

export { resetEffect };

