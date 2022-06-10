import {
  WARNING_ID_EMPTY,
  WARNING_ID_LENGTH,
  WARNING_ID_LETTERS,
  WARNING_ID_START,
} from '@/constants/validation';

import { idValidator, isIdValid } from '.';

describe('idValidator() 함수 테스트', () => {
  it(`공백문자열은 거짓과 해당하는 경고 문자열을 반환해야 합니다.`, () => {
    const result = idValidator('');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_ID_EMPTY);
  });
  it(`4자보다 길이가 짧을 경우 거짓과 해당하는 경고 문자열을 반환해야 합니다.`, () => {
    const result = idValidator('1');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_ID_LENGTH);
  });
  it(`30자보다 길이가 길 경우 거짓과 해당하는 경고 문자열을 반환해야 합니다.`, () => {
    const MAX_LENGTH = 30;
    const result = idValidator('1'.repeat(MAX_LENGTH + 1));
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_ID_LENGTH);
  });
  it(`특수문자가 포함될 경우 거짓과 해당하는 경고 문자열을 반환해야 합니다.`, () => {
    const result = idValidator('ABCabc!@#');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_ID_LETTERS);
  });
  it(`숫자로 시작할 경우 거짓과 해당하는 경고 문자열을 반환해야 합니다.`, () => {
    const result = idValidator('123ABC');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_ID_START);
  });
  it('4 ~ 30자 사이의 영문자로 시작하는 영대소문자 + 숫자 조합은 참과 빈 문자열을 반환해야 합니다.', () => {
    const result = idValidator('ABCabc123');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('4 ~ 30자 사이의 영문자로 시작하는 영대문자 + 영소문자 조합은 참과 빈 문자열을 반환해야 합니다.', () => {
    const result = idValidator('ABCabc');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
});

describe('isIdValid() 함수 테스트', () => {
  it(`공백문자열은 거짓을 반환해야 합니다.`, () => {
    expect(isIdValid('')).toBe(false);
  });
  it(`4자보다 길이가 짧을 경우 거짓을 반환해야 합니다.`, () => {
    expect(isIdValid('1')).toBe(false);
  });
  it(`30자보다 길이가 길 경우 거짓을 반환해야 합니다.`, () => {
    const MAX_LENGTH = 30;
    expect(isIdValid('1'.repeat(MAX_LENGTH + 1))).toBe(false);
  });
  it(`특수문자가 포함될 경우 거짓을 반환해야 합니다.`, () => {
    expect(isIdValid('ABCabc!@#')).toBe(false);
  });
  it(`숫자로 시작할 경우 거짓을 반환해야 합니다.`, () => {
    expect(isIdValid('123ABC')).toBe(false);
  });
  it('4 ~ 30자 사이의 영문자로 시작하는 영대소문자 + 숫자 조합은 참을 반환해야 합니다.', () => {
    expect(isIdValid('ABCabc123')).toBe(true);
    expect(isIdValid('ABC123')).toBe(true);
    expect(isIdValid('a321bc')).toBe(true);
  });
  it('4 ~ 30자 사이의 영문자로 시작하는 영대문자 + 영소문자 조합은 참을 반환해야 합니다.', () => {
    expect(isIdValid('ABCabc')).toBe(true);
    expect(isIdValid('ABCbbb')).toBe(true);
    expect(isIdValid('aCCCaaab')).toBe(true);
  });
});
