import { reverseString } from "../reverseString.js";

let str;

test("reverseString fn exists", () => {
  expect(reverseString).toBeDefined();
});

test("reverseString fn is a function", () => {
  expect(typeof reverseString).toBe("function");
});

test("reverseString fn throws on wrong input", () => {
  str = 1;
  expect(() => reverseString(str)).toThrow(
    "Error: expected a string argument.",
  );
});

test("reverseString fn returns a reversed string", () => {
  str = "Hello";
  expect(reverseString(str)).toBe(str.split("").reverse().join(""));
});
