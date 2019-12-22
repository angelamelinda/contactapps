import { validate } from "./validate";

test("should return Required if the value is empty", () => {
  expect(validate.emptyString("")).toBe("Required");
});

test("should return empty string if the value is not empty", () => {
  expect(validate.emptyString("Hello World")).toBe("");
});

test("should return Minimum <minimum-number> if the value is lower than minimum number", () => {
  expect(validate.minMaxNumber(1, 100, 0)).toBe("Minimum 1");
});

test("should return Maximum <max-number> if the value is highest than maximum number", () => {
  expect(validate.minMaxNumber(1, 100, 1000)).toBe("Maximum 100");
});

test("should return empty string if the value is betweent minimum and maximum number", () => {
  expect(validate.minMaxNumber(1, 100, 99)).toBe("");
});

test("should return Invalid Url if the value is A", () => {
  expect(validate.emptyStringAndUrl("A")).toBe("Invalid Url");
});

test("should return empty string if the value is http://google.com", () => {
  expect(validate.emptyStringAndUrl("http://google.com")).toBe("");
});

test("should return Required if the value is empty", () => {
  expect(validate.emptyStringAndUrl("")).toBe("Required");
});
