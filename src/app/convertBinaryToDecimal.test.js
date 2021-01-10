import convertBinaryToDecimal from "./convertBinaryToDecimal";

describe("Binary to decimal", () => {
  it("should convert correctly", () => {
    expect(convertBinaryToDecimal("0")).toBe(0);
    expect(convertBinaryToDecimal("1")).toBe(1);
    expect(convertBinaryToDecimal("10")).toBe(2);
    expect(convertBinaryToDecimal("11")).toBe(3);
    expect(convertBinaryToDecimal("11111111")).toBe(255);
  });

  it("should not be empty", () => {
    expect(() => convertBinaryToDecimal("")).toThrow(
      new Error("Binary number must not be empty")
    );
  });

  it("should accept only strings", () => {
    expect(() => convertBinaryToDecimal(0)).toThrow(
      new Error("Binary number must be a string")
    );
  });

  it("should accept only 0s and 1", () => {
    expect(() => convertBinaryToDecimal("2")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("012")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("a")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("1a")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("01b")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("0191")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("01_91")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("01%91")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("_0")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("[")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("@")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("*")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
    expect(() => convertBinaryToDecimal("%")).toThrow(
      new Error("Binary number must contain only 0s and 1s")
    );
  });
});
