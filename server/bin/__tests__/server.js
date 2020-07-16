const supertest = require("supertest");
const app = require("../../bin/www.js");
const request = supertest(app);

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
