const converter = require("../converter");
const supertest = require("supertest");
const app = require("../../bin/www.js");
const request = supertest(app);

test("convert F To C", function () {
  expect(converter.convertFToC(32)).toBe(0);
});

test("convert 0 C To K", function () {
  expect(converter.convertCToK(0)).toBeCloseTo(273.15);
});

test("convert 0 C To K", function () {
  expect(converter.convertCToK(-300)).toBe(false);
});

test("convert 0 C To K", function () {
  expect(converter.convertCToK(-273.15)).toBeCloseTo(0, 1);
});

test("convert F To K", function () {
  expect(converter.convertFToK(0)).toBeCloseTo(255.37);
});

test("convert F To K", function () {
  expect(converter.convertFToK(-50)).toBeCloseTo(227.59);
});

test("convert F To K", function () {
  expect(converter.convertFToK(-459.67)).toBe(0, 2);
});

test("convert F To K", function () {
  expect(converter.convertFToK(-459.65)).toBeCloseTo(0.0, 1);
});

test("convert 30 C To K", function () {
  expect(converter.convertCToK(30)).toBeCloseTo(303.15);
});

describe("Test API render", () => {
  it("Get HomePage", async () => {
    await request.get("/").then((response) => {
      expect(response.statusCode).toEqual(200);
    });
  });

  it("Post Test Error", async () => {
    await request.post("/ftok").then((response) => {
      expect(response.statusCode).toEqual(404);
    });
  });
});
