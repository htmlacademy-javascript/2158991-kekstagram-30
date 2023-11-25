const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const picture = document.querySelector('.img-upload__preview img');

const STEP_SCALE = 25;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

const getValue = () => parseInt(scaleValue.value, 10);

const updateScale = (value) => {
  scaleValue.value = `${value}%`;
  const scale = value / 100;
  picture.style.transform = `scale(${scale})`;
};

const onscaleSmallerButton = () => {
  const value = getValue();
  let newValue = value - STEP_SCALE;
  if (newValue < MIN_VALUE){
    newValue = MIN_VALUE;
  }
  updateScale(newValue);
};

const onscaleBiggerButton = () => {
  const value = getValue();
  let newValue = value + STEP_SCALE;
  if (newValue > MAX_VALUE){
    newValue = MAX_VALUE;
  }
  updateScale(newValue);
};

scaleSmallerButton.addEventListener('click', onscaleSmallerButton);
scaleBiggerButton.addEventListener('click', onscaleBiggerButton);

export { picture };
