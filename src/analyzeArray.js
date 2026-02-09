export function analyzeArray(arr = []) {
  if (!Array.isArray(arr))
    throw new Error("Error: expecting argument of type array");

  if (!arr.length) return {};

  if (arr.some((num) => typeof num !== "number"))
    throw new Error("Error: expecting argument content of type number");

  return {
    average: arr.reduce((prev, cur) => prev + cur, 0) / arr.length,
    length: arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}
