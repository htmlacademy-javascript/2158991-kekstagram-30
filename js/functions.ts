const enum Default {
  MAX_LENGTH = 140;
}

interface WithLength {
  length: number;
}

const isStringLengthValidate = ({length}: WithLength, maxLength: number = Default.MAX_LENGTH) => length <= maxLength;

const isPalindrome = (string: string) => {
  string = string.replaceAll(' ','').toLowerCase();
  for (let i = 0; i <= string.length / 2; i++){
    if (string[i] !== string.at(-1 - i)){
      return false;
    }
  }
  return true;
};

const getInteger = (input: string | number) => {
  input = input.toString();
  let result = '';
  for (const char of input) {
    if (!Number.isNaN(parseInt(char, 10))) {
      result += char;
    }
  }
  return parseInt(result, 10);
};

export {isStringLengthValidate, isPalindrome, getInteger};
