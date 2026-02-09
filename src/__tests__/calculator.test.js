import { calculator } from "../calculator.js";

describe("calculator function", () => {
  it("performs addition correctly", () => {
    expect(calculator.add(1, 5)).toBe(6);
  });

  it("performs subtraction correctly", () => {
    expect(calculator.subtract(2, 2)).toBe(0);
  });

  it("performs division correctly", () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });

  it("performs multiplication correctly", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  it("throws if wrong arguments are passed to it's methods", () => {
    // Add
    expect(() => calculator.add()).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.add(1)).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.add("1", 2)).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.add(1, 2, 3)).toThrow(
      "Error: expected just two integer arguments",
    );

    // Subtract
    expect(() => calculator.subtract()).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.subtract(1)).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.subtract("1", 2)).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.subtract(1, 2, 3)).toThrow(
      "Error: expected just two integer arguments",
    );

    // Divide
    expect(() => calculator.divide()).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.divide(1)).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.divide("1", 2)).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.divide(1, 2, 3)).toThrow(
      "Error: expected just two integer arguments",
    );

    // Multiplication
    expect(() => calculator.multiply()).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.multiply(1)).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.multiply("1", 2)).toThrow(
      "Error: expected just two integer arguments",
    );

    expect(() => calculator.multiply(1, 2, 3)).toThrow(
      "Error: expected just two integer arguments",
    );
  });
});
