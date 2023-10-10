const getInteger = (value) => {
  value = value.toString();
  let result = '';
  for (let i = 0; i < value.length; i++) {
    if (!Number.isNaN(value[i])) {
      result += value[i];
    }
    return getInteger(result);
  }
};
