import { divide, multiply, sum } from '../math';

describe('math', () => {
  describe('divide', () => {
    it.each([
      { inputA: 6, inputB: 3, expected: 2 },
      { inputA: 10, inputB: 0, expected: Infinity },
      { inputA: 12, inputB: 3, expected: 4 },
      { inputA: 100, inputB: 10, expected: 10 },
    ])(
      'should $inputA divided to $inputB equals $expected',
      ({ inputA, inputB, expected }) => {
        const res = divide(inputA, inputB);

        expect(res).toBe(expected);
      },
    );
    // it('should return Infinity dividing by 0', () => {
    //   const expectedResult = Infinity; //arrange

    //   const res = divide(4, 0);

    //   expect(res).toBe(expectedResult);
    // });
  });
  describe('multiply', () => {
    it('should multiply positive numbers', () => {
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
  describe('sum', () => {
    it('should add positive numbers', () => {
      const expectedResult = 5; //arrange

      const actualResult = sum(2, 3); //act

      expect(actualResult).toBe(expectedResult); //assert
    });
  });
});
