import { reverseString } from "../reverseString.js";

describe("reverseString function", () => {
  let str;

  test("returns a reversed string", () => {
    str = "Hello";
    expect(reverseString(str)).toBe(str.split("").reverse().join(""));
  });

  test("throws on wrong input", () => {
    str = 1;
    expect(() => reverseString(str)).toThrow(
      "Error: expected a string argument.",
    );
  });
});
