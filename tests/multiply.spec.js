const { multiply } = require("./../calculator");

describe("Multiply", () => {
  test("should multiply up two positive integers correctly", () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test("should multiply up two floating point numbers correctly", () => {
    const result = multiply(1.25, 2.29);
    expect(result).toBe(2.8625);
  });

  test("should multiply up a negative and a positive number correctly", () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });

  test("should return 0 when function is called without arguments", () => {
    const result = multiply();
    expect(result).toBe(0);
  });

  test("should multiply a value with 1 when function is called with a single argument", () => {
    const result = multiply(26);
    expect(result).toBe(26);
  });
});