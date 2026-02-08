const plainTextAlpha = "abcdefghijklmnopqrstuvwxyz";

export function caesarCipher(...args) {
  if (args.length > 2 || args.length < 2)
    throw new Error("Error: expecting two arguments");

  const [str, shift] = args;

  if (typeof str !== "string")
    throw new Error("Error: expecting a first argument of type string");

  if (typeof shift !== "number")
    throw new Error("Error: expecting a second argument of type number");

  return encrypt(str, shift);
}

function encrypt(str, shift) {
  const cipherTextAlpha =
    plainTextAlpha.slice(shift) + plainTextAlpha.slice(0, shift);

  const encryptionTable = Object.fromEntries(
    plainTextAlpha.split("").map((key, i) => [key, cipherTextAlpha[i]]),
  );

  const cipherText = str
    .split("")
    .map((char) => {
      if (encryptionTable[char.toLowerCase()] && char === char.toUpperCase()) {
        return encryptionTable[char.toLowerCase()].toUpperCase();
      }

      if (!encryptionTable[char]) return char;
      return encryptionTable[char.toLowerCase()];
    })
    .join("");

  return cipherText;
}
