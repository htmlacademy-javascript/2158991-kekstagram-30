const EFFECT_OPTION_MAP = {
  none: {
    slider: createSlider(0, 100)
  },

  chrome: {
    slider: createSlider(0, 1, 0.1),
    filter: (value) => `grayscale(${value})`
  },

  sepia: {
    slider: createSlider(0, 1, 0.1),
    filter: (value) => `sepia(${value})`,
  },

  marvin: {
    slider: createSlider(0, 100, 1),
    filter: (value) => `invert(${value}%)`,
  },

  phobos: {
    slider: createSlider(0, 3, 0.1),
    filter: (value) => `blur(${value}px)`,
  },

  heat: {
    slider: createSlider(0, 3, 0.1),
    filter: (value) => `brightness(${value})`,
  },
};

function createSlider(min = 0, max = 100, step = 1, start = max) {
  return {
    range: {
      min,
      max
    },
    start,
    step,
    connect: 'lower'
  };
}

export { EFFECT_OPTION_MAP };
