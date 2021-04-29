import { sum } from "./sum";

describe('sum', () => {
  it('should return sum', () => {
    // Arrange
    const num1 = 1;
    const num2 = 10;
    const expectedSum = 11;

    // Act
    var result = sum(num1, num2);

    // Assert
    expect(result).toEqual(expectedSum);
  });
});