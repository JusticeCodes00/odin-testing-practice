export function reverseString(str) {
  if (typeof str !== "string")
    throw new Error("Error: expected a string argument.");
  return str.split("").reverse().join("");
}
