import { calculator } from "../calculator.js";

test("calculator exist", () => {
  expect(calculator).toBeDefined();
});

test("calculator is an object", () => {
  expect(typeof calculator).toBe("object");
});

test("calculator contains add, subtract, divide, and multiply property keys", () => {
  expect(Object.keys(calculator)).toStrictEqual([
    "validateInput",
    "add",
    "subtract",
    "divide",
    "multiply",
  ]);
});

test("calculator add, subtract, divide, and multiply properties are function", () => {
  const keys = Object.keys(calculator);
  expect(keys.every((k) => typeof calculator[k] === "function")).toBe(true);
});

test("all calculator fns take two arguments that are numbers", () => {
  expect(() => calculator.add()).toThrow(
    "Error: expected just two integer arguments",
  );
  expect(() => calculator.subtract(1)).toThrow(
    "Error: expected just two integer arguments",
  );
  expect(() => calculator.divide("1", 2)).toThrow(
    "Error: expected just two integer arguments",
  );
  expect(() => calculator.multiply(1, 2, 3)).toThrow(
    "Error: expected just two integer arguments",
  );
});

test("calculator main fns return their expected outputs", () => {
  const num1 = 20;
  const num2 = 10;

  expect(calculator.add(num1, num2)).toBe(num1 + num2);
  expect(calculator.subtract(num1, num2)).toBe(num1 - num2);
  expect(calculator.divide(num1, num2)).toBe(num1 / num2);
  expect(calculator.multiply(num1, num2)).toBe(num1 * num2);
});
