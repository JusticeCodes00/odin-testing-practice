import { caesarCipher } from "../caesarCipher.js";

test("caesarCipher exits", () => {
  expect(caesarCipher).toBeDefined();
});

test("caesarCipher is a function", () => {
  expect(typeof caesarCipher).toBe("function");
});

test("caesarCipher takes two arguments", () => {
  expect(() => caesarCipher()).toThrow("Error: expecting two arguments");
  expect(() => caesarCipher(1)).toThrow("Error: expecting two arguments");
  expect(() => caesarCipher(1, 4, 6)).toThrow("Error: expecting two arguments");

  expect(() => caesarCipher(1, 2)).not.toThrow(
    "Error: expecting two arguments",
  );
});

test("caesarCipher first arg is a string", () => {
  expect(() => caesarCipher(1, 3)).toThrow(
    "Error: expecting a first argument of type string",
  );

  expect(() => caesarCipher("1", 2)).not.toThrow(
    "Error: expecting a first argument of type string",
  );
});

test("caesarCipher second arg is an integer", () => {
  expect(() => caesarCipher("Hello", "2")).toThrow(
    "Error: expecting a second argument of type number",
  );

  expect(() => caesarCipher("Hello", 1)).not.toThrow(
    "Error: expecting a second argument of type number",
  );
});

test("caesarCipher returns an encrypted string", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
