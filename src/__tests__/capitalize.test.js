import { capitalize } from "../capitalize.js";

let arg;

test("capitalize fn exits", () => {
  expect(capitalize).toBeDefined();
});

test("capitalize fn is a function", () => {
  expect(typeof capitalize).toBe("function");
});

test("capitalize fn throws on wrong input", () => {
  arg = 1;
  expect(() => capitalize(arg)).toThrow("Error: expected a string argument.");

  expect(() => capitalize()).toThrow("Error: expected a string argument.");
});

test("capitalize fn returns a string with the first character capitalized", () => {
  arg = "justice";
  expect(capitalize(arg)).toBe(arg[0].toUpperCase() + arg.slice(1));
});
