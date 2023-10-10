const isStringLengthValidate = (string, length) => string.length <= length;

const isPalindrome = (string) => {
  string = string.replaceAll(' ','').toLowerCase();
  for (let i = 0; i <= string.length / 2; i++){
    if (string[i] !== string.at(-1 - i)){
      return false;
    }
  }
  return true;
}

const getInteger = (value) => {
  const string = value.toString();
  let result = '';
  for (let i = 0; i < string.length; i++){
    if (!Number.isNaN(parseInt(string[i],10))){
      result += string[i];
    }
  }
  return parseInt(result,10);
}

/* console.log(getInteger('2023 год'));
console.log(getInteger('ECMAScript 2022'));
console.log(getInteger('1 кефир, 0.5 батона'));
console.log(getInteger('агент 007'));
console.log(getInteger('а я томат'));
console.log(getInteger(2023));
console.log(getInteger(-1));
console.log(getInteger(1.5)); */
