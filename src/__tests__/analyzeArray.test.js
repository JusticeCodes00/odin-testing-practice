import { analyzeArray } from "../analyzeArray.js";

describe("analyzeArray function", () => {
  it("returns an obj with average, min, max, and length properties", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it("throws when input is not an array", () => {
    expect(() => analyzeArray(1)).toThrow(
      "Error: expecting argument of type array",
    );

    expect(() => analyzeArray("1")).toThrow(
      "Error: expecting argument of type array",
    );
  });

  it("returns an empty of object if array is empty", () => {
    expect(analyzeArray([])).toStrictEqual({});
  });

  it("throws when array contents are not numbers", () => {
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
});
