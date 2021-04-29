import { sum } from "./sum";

describe('sum', () => {
  it('should return sum', () => {
    const num1 = 1;
    const num2 = 10;
    const expectedSum = 11;

    expect(sum(num1, num2)).toEqual(expectedSum);
  });

  it('should return the same num when another is zero', () => {
    const num1 = 0;
    const num2 = 10;
    const expectedSum = 10;

    expect(sum(num1, num2)).toEqual(expectedSum);
  });
});