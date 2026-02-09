import { caesarCipher } from "../caesarCipher.js";

describe("caesarCipher function", () => {
  it("returns an encrypted string", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });

  it("throws if arguments passed are less than or greater than 2", () => {
    expect(() => caesarCipher()).toThrow("Error: expecting two arguments");
    expect(() => caesarCipher(1)).toThrow("Error: expecting two arguments");
    expect(() => caesarCipher(1, 4, 6)).toThrow(
      "Error: expecting two arguments",
    );

    expect(() => caesarCipher(1, 2)).not.toThrow(
      "Error: expecting two arguments",
    );
  });

  it("throws if first argument is not a string", () => {
    expect(() => caesarCipher(1, 3)).toThrow(
      "Error: expecting a first argument of type string",
    );

    expect(() => caesarCipher("1", 2)).not.toThrow(
      "Error: expecting a first argument of type string",
    );
  });

  it("throws if second argument is not an integer", () => {
    expect(() => caesarCipher("Hello", "2")).toThrow(
      "Error: expecting a second argument of type number",
    );

    expect(() => caesarCipher("Hello", 1)).not.toThrow(
      "Error: expecting a second argument of type number",
    );
  });
});
