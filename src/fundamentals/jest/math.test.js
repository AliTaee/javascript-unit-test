const { sum, subtract, isEvenNumber } = require("../math");

describe("Test sum function", () => {
  test("Sum two number", () => {
    let result, expected;
    result = sum(10, 5);
    expected = 15;
    expect(result).toBe(expected);
  });

  test("Sum two number", () => {
    let result, expected;
    result = sum("6", "4");
    expected = 10;
    expect(result).toBe(expected);
  });
});

test("Number is even", () => {
  let result = isEvenNumber(10);
  expect(result).toBeTruthy();
});

test("Subtract two number", () => {
  let result, expected;
  result = subtract(10, 6);
  expected = 4;
  expect(result).toBe(expected);
});
