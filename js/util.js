const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => ++lastGeneratedId;
};

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)){
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getArrayRandomElements = (arr, countElement) => {
  const randomElements = [];
  if (countElement >= arr.length){
    return arr;
  }
  for (let i = 0; i < countElement; i++){
    let indexElement = getRandomInteger(0,arr.length - 1);
    while (randomElements.includes(arr[indexElement])) {
      indexElement = getRandomInteger(0,arr.length - 1);
    }
    randomElements.push(arr[indexElement]);
  }
  return randomElements;
};

const getStringFromArray = (arr) => arr.join(' ');

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {createIdGenerator, getRandomInteger, createRandomIdFromRangeGenerator, getArrayRandomElements, getStringFromArray, debounce, throttle};
