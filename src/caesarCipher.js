const plainTextAlpha = "abcdefghijklmnopqrstuvwxyz";

export function caesarCipher(...args) {
  if (args.length > 2 || args.length < 2)
    throw new Error("Error: expecting two arguments");

  const [str, shift] = args;

  if (typeof str !== "string")
    throw new Error("Error: expecting a first argument to type string");

  if (typeof shift !== "number")
    throw new Error("Error: expecting a second argument to type number");

  return encrypt(str, shift);
}

function encrypt(str, shift) {
  const cipherTextAlpha =
    plainTextAlpha.slice(shift) + plainTextAlpha.slice(0, shift);
  //  C console.log({ plainTextAlpha, cipherTextAlpha });

  const encryptionTable = Object.fromEntries(
    plainTextAlpha.split("").map((key, i) => [key, cipherTextAlpha[i]]),
  );

  const cipherText = str
    .split("")
    .map((char) => encryptionTable[char])
    .join("");

  return cipherText;
}

// C console.log(caesarCipher("hello", 0));
