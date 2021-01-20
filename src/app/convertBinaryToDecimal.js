export default function convertBinaryToDecimal(binaryNumber) {
  const isEmpty = binaryNumber.length === 0;
  const isString = typeof binaryNumber === "string";

  if (isEmpty) {
    throw Error("Binary number must not be empty");
  }

  if (!isString) {
    throw Error("Binary number must be a string");
  }

  const containsOnlyZerosAndOnes = binaryNumber.match(/\b[01]+\b/);
  const isValidNumber = Number.isInteger(Number(binaryNumber));

  if (!containsOnlyZerosAndOnes || !isValidNumber) {
    throw Error("Binary number must contain only 0s and 1s");
  }

  return parseInt(binaryNumber, 2);
}
