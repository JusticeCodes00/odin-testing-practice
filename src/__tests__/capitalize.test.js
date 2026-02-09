import { capitalize } from "../capitalize.js";

let arg;

describe("capitalize function", () => {
  test("returns a string with the first character capitalized", () => {
    arg = "justice";
    expect(capitalize(arg)).toBe(arg[0].toUpperCase() + arg.slice(1));
  });

  test("throws on none string inputs", () => {
    arg = 1;
    expect(() => capitalize(arg)).toThrow("Error: expected a string argument.");

    expect(() => capitalize()).toThrow("Error: expected a string argument.");
  });
});
