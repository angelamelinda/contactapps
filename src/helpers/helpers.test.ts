import { helpers } from ".";

test("should return false if the value is A", () => {
  expect(helpers.isUrl("A")).toBe(false);
});

test("should return true if the value is http://google.com", () => {
  expect(helpers.isUrl("http://google.com")).toBe(true);
});
