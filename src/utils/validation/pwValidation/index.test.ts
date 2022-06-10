import { isPwValid, pwValidator } from '.';

const WARNING_PW_EMPTY = 'Please enter your password';
const WARNING_PW_LENGTH = 'The password must be 10 ~ 35 characters long';
const WARNING_PW_COMBINATION =
  'The password must be a combination of at least two of uppercase and lowercase letters, numbers, and special characters.';

describe('pwValidator() 함수 테스트', () => {
  it('공백문자열은 거짓과 해당하는 경고 문자열을 반환해야 합니다.', () => {
    const result = pwValidator('');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_EMPTY);
  });
  it('10자보다 길이가 짧을 경우 거짓과 해당하는 경고 문자열을 반환해야 합니다.', () => {
    const result = pwValidator('1');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_LENGTH);
  });
  it('35자보다 길이가 길 경우 거짓과 해당하는 경고 문자열을 반환해야 합니다.', () => {
    const MAX_LENGTH = 35;
    const result = pwValidator('1'.repeat(MAX_LENGTH + 1));
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_LENGTH);
  });
  it('영대문자만 사용할 경우 거짓과 조합 관련 경고 문자열을 반환해야 합니다.', () => {
    const result = pwValidator('EFWEFWEAEFWFEWFW');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_COMBINATION);
  });
  it('영소문자만 사용할 경우 거짓과 조합 관련 경고 문자열을 반환해야 합니다.', () => {
    const result = pwValidator('abdefwefwefwefwe');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_COMBINATION);
  });
  it('숫자만 사용할 경우 거짓과 조합 관련 경고 문자열을 반환해야 합니다.', () => {
    const result = pwValidator('12345678901');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_COMBINATION);
  });
  it('특수문자만 사용할 경우 거짓과 조합 관련 경고 문자열을 반환해야 합니다.', () => {
    const result = pwValidator('!@!#(&(&((##$@#$');
    expect(result[0]).toBe(false);
    expect(result[1]).toBe(WARNING_PW_COMBINATION);
  });
  it('10 ~ 35자 사이의 영대문자 + 영소문자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('ABCabcABCa');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 영대문자 + 숫자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('ABC123ABC123');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 영대문자 + 특수문자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('ABC!@$ABC!@$');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 영소문자 + 숫자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('abc123abc123');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 영소문자 + 특수문자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('abc!@$abc!@$');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
  it('10 ~ 35자 사이의 숫자 + 특수문자 조합은 참과 빈 문자열을 반환해야 합니다. ', () => {
    const result = pwValidator('123!@$123!@$');
    expect(result[0]).toBe(true);
    expect(result[1]).toBe('');
  });
});

describe('isPwValid() 함수 테스트', () => {
  it(`공백문자열은 거짓을 반환해야 합니다.`, () => {
    expect(isPwValid('')).toBe(false);
  });
  it(`10자보다 길이가 짧을 경우 거짓을 반환해야 합니다.`, () => {
    expect(isPwValid('1')).toBe(false);
  });
  it(`35자보다 길이가 길 경우 거짓을 반환해야 합니다.`, () => {
    const MAX_LENGTH = 35;
    expect(isPwValid('1'.repeat(MAX_LENGTH + 1))).toBe(false);
  });
  it('영대문자만 사용할 경우 거짓을 반환해야 합니다.', () => {
    expect(isPwValid('ABCDEFGHIJ')).toBe(false);
    expect(isPwValid('JIHGFEDCBA')).toBe(false);
    expect(isPwValid('WEFWEFEWFF')).toBe(false);
  });
  it('영소문자만 사용할 경우 거짓을 반환해야 합니다.', () => {
    expect(isPwValid('abcdefghij')).toBe(false);
    expect(isPwValid('jihgfedcba')).toBe(false);
    expect(isPwValid('wefwefewfw')).toBe(false);
  });
  it('숫자만 사용할 경우 거짓을 반환해야 합니다.', () => {
    expect(isPwValid('1234567890')).toBe(false);
    expect(isPwValid('0987654321')).toBe(false);
    expect(isPwValid('1231231313')).toBe(false);
  });
  it('특수문자만 사용할 경우 거짓을 반환해야 합니다.', () => {
    expect(isPwValid('^%$%^&*(*^')).toBe(false);
    expect(isPwValid(')(*&**&^&*')).toBe(false);
    expect(isPwValid('#@$#$%##%#')).toBe(false);
  });
  it('10 ~ 35자 사이의 영대문자 + 영소문자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('ABCabcABCa')).toBe(true);
    expect(isPwValid('abAbabABab')).toBe(true);
    expect(isPwValid('aaaBBBaaaB')).toBe(true);
  });
  it('10 ~ 35자 사이의 영대문자 + 숫자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('ABC123ABC123')).toBe(true);
    expect(isPwValid('AB12AB12ABB')).toBe(true);
    expect(isPwValid('BBB111BBB111')).toBe(true);
  });
  it('10 ~ 35자 사이의 영대문자 + 특수문자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('ABC!@$ABC!@$')).toBe(true);
    expect(isPwValid('AB!@AB!@AB!')).toBe(true);
    expect(isPwValid('BBB!@$BBB!@$')).toBe(true);
  });
  it('10 ~ 35자 사이의 영소문자 + 숫자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('abc123abc123')).toBe(true);
    expect(isPwValid('ab12ab12abb')).toBe(true);
    expect(isPwValid('bbb111bbb111')).toBe(true);
  });
  it('10 ~ 35자 사이의 영소문자 + 특수문자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('abc!@$abc!@$')).toBe(true);
    expect(isPwValid('ab!@ab!@ab!')).toBe(true);
    expect(isPwValid('bbb!@$bbb!@$')).toBe(true);
  });
  it('10 ~ 35자 사이의 숫자 + 특수문자 조합은 참을 반환해야 합니다. ', () => {
    expect(isPwValid('123!@$123!@$')).toBe(true);
    expect(isPwValid('12!@12!@12!')).toBe(true);
    expect(isPwValid('222!@$222!@$')).toBe(true);
  });
});
