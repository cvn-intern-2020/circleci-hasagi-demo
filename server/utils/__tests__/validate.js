const validate = require("../validate");

test("validate F To K", function () {
  expect(validate.validateFtoK(-459.7)).toBe(false);
});

test("validate F To K", function () {
  expect(validate.validateFtoK(-459.65)).toBe(true);
});

test("validate C To K", function () {
  expect(validate.validateCtoK(-273.16)).toBe(false);
});
test("validate C To K", function () {
  expect(validate.validateCtoK(-273.15)).toBe(true);
});
