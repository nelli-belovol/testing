import { toLower, toUpper, len } from './strings';

describe.only('strings', () => {
  it.each([
    { str: 'Hello world', expected: 'HELLO WORLD' },
    { str: 'Testing', expected: 'TESTING' },
  ])('should $str toUpperCase equals $expected', ({ str, expected }) => {
    const res = toUpper(str);

    expect(res).toBe(expected);
  });

  it.each([
    { str: 'HELLO WORLD', expected: 'hello world' },
    { str: 'TESTIng', expected: 'testing' },
  ])('should $str toLowerCase equals $expected', ({ str, expected }) => {
    const res = toLower(str);

    expect(res).toBe(expected);
  });

  it.each([
    { str: 'Hello world', expected: 11 },
    { str: 'Testing', expected: 7 },
    { str: '', expected: 0 },
  ])('should $str length equals $expected', ({ str, expected }) => {
    const res = len(str);

    expect(res).toBe(expected);
  });
});
