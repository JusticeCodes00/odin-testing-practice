export function capitalize(str) {
  if (typeof str !== "string")
    throw new Error("Error: expected a string argument.");

  return str[0].toUpperCase() + str.slice(1);
}
