import { multiply } from './multiply';

describe('multiply', () => {
  it('should multiply posotive numbers', () => {
    //AAA - arrange, act, asser

    const expectedResult = 6; //arrange

    const actualResult = multiply(2, 3); //act

    expect(actualResult).toBe(expectedResult); //assert
  });
  it('should multiply negative numbers', () => {
    const res = multiply(-2, -3);
    expect(res).toBe(6);
  });
  it('should multiply negative and positive numbers', () => {
    const res = multiply(2, -3);
    expect(res).toBe(-6);
  });
});
