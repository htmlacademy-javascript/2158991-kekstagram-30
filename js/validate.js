import Pristine from 'pristinejs';

const REG_EX = /^#[a-zа-яё0-9]{1,19}$/;
const MAX_COUNT_TAGS = 5;
const MAX_LENGTH = 140;

const hashtags = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p'
});

pristine.addValidator(
  description,
  (value) => value.length <= MAX_LENGTH,
  'длина комментария не может составлять больше 140 символов'
);

pristine.addValidator(
  hashtags,
  (value) => {
    const tags = value.trim().toLowerCase().split(' ').filter((tag) => tag !== '');
    return tags.length === new Set(tags).size;
  },
  'хэш-теги не должны повторяться'
);

pristine.addValidator(
  hashtags,
  (value) => {
    const tags = value.trim().toLowerCase().split(' ').filter((tag) => tag !== '');
    return tags.length <= MAX_COUNT_TAGS;
  },
  'нельзя указать больше пяти хэш-тегов'
);

pristine.addValidator(
  hashtags,
  (value) => {
    const tags = value.trim().toLowerCase().split(' ').filter((tag) => tag !== '');
    if (tags[0] === '' || tags.every((tag) => REG_EX.test(tag))){
      return true;
    }
    return false;
  },
  'как минимум один хэш-тег невалиден'
);

const isValid = () => pristine.validate();
const resetValidation = () => pristine.reset();

export {isValid, resetValidation, form};
