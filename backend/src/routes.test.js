const app = require("./index");
const routes = require("./routes");
const request = require("supertest");

test("Get finances", async () => {
  const response = await request(app).get("/finances");
  expect(response).toBeTruthy();
  expect(response.status).toEqual(200);
});
