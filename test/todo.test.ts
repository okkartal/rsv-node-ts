import request from "supertest";
import app from "../src/index";

describe("API Endpoints Tests", (): void => {
  describe("GET ROUTES", (): void => {
    test("GET / sample GET route", async (): Promise<void> => {
      const res = await request(app).get("/");

      expect(res.body).toEqual({
        msg: "It's working'!",
      });
    });

    test("GET route for all items", async (): Promise<void> => {
      const res = await request(app).get("/item/all");

      expect(res.body.docs.length).toEqual(3);
    });

    test("GET route for single item", async (): Promise<void> => {
      const id = '658cad430a4238f668cb0be5'
      const res = await request(app).get(`/item/${id}`);

      expect(res.body.result[0].user).toEqual('user1');
    });
  })
})
