import { analyzeArray } from "../analyzeArray.js";

test("analyzeArray exits", () => {
  expect(analyzeArray).toBeDefined();
});

test("analyzeArray is a fn", () => {
  expect(typeof analyzeArray).toBe("function");
});

test("analyzeArray takes an array of numbers", () => {
  expect(() => analyzeArray()).toThrow(
    "Error: expecting argument of type array",
  );

  expect(() => analyzeArray(1)).toThrow(
    "Error: expecting argument of type array",
  );

  expect(() => analyzeArray("1")).toThrow(
    "Error: expecting argument of type array",
  );
});

test("analyzeArray argument content are numbers", () => {
  expect(() => analyzeArray(["2b"])).toThrow(
    "Error: expecting argument content of type number",
  );
  expect(() => analyzeArray([1, "2"])).toThrow(
    "Error: expecting argument content of type number",
  );

  expect(() => analyzeArray([1, 3])).not.toThrow(
    "Error: expecting argument content of type number",
  );
});

test("analyzeArray returns an obj with average, min, max, and length properties", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
