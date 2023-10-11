import { describe, expect, it } from 'vitest';
import {getInteger, isPalindrome, isStringLengthValidate} from './functions';

describe('Функция для проверки длины строки.', () => {
  const TEST_STRING = 'проверяемая строка';
  const { length } = TEST_STRING;

  it('Длина строки меньше второго аргумента', () => expect(isStringLengthValidate(TEST_STRING, length + 1)).toBe(true));
  it('Длина строки равна второму аргументу', () => expect(isStringLengthValidate(TEST_STRING, length)).toBe(true));
  it('Длина строки больше второго аргумента', () => expect(isStringLengthValidate(TEST_STRING, length - 1)).toBe(false));

  it('Вызов без второго аргумента', () => expect(isStringLengthValidate(TEST_STRING)).toBe(true));
  const veryLongString = TEST_STRING.repeat(100);
  it('Вызов без второго аргумента очень длинной строки', () => expect(isStringLengthValidate(veryLongString)).toBe(false));
});

describe('Функция для проверки, является ли строка палиндромом.', () => {
  it('Строка является палиндромом', () => expect(isPalindrome('топот')).toBe(true));
  it('Палиндром с разным регистром', () => expect(isPalindrome('ДовОд')).toBe(true));
  it('Не палиндром', () => expect(isPalindrome('Кекс')).toBe(false));
  it('Палиндром с пробелами', () => expect(isPalindrome('Лёша на полке клопа нашёл ')).toBe(true));
});


describe ('Функция для извлечения цифр из строки.', () => {
  it('Строка содержит цифры в начале', () => expect(getInteger('2023 год')).toBe(2023));
  it('Строка содержит цифры в конце', () => expect(getInteger('ECMAScript 2022')).toBe(2022));
  it('Строка содержит цифры в разных местах, нужно конкетинировать', () => expect(getInteger('1 кефир, 0.5 батона')).toBe(105));
  it('Строка содержит цифры с нулями впереди. Нужно опустить нули, преобразив в число.', () => expect(getInteger('агент 007')).toBe(7));
  it('Строка не содержит цифр', () => expect(getInteger('а я томат')).toBeNaN());
  it('Число вернет число', () => expect(getInteger(2023)).toBe(2023));
  it('Дробное число', () => expect(getInteger(1.5)).toBe(15));
  it('Отрицательное число', () => expect(getInteger(-1)).toBe(1));
});
