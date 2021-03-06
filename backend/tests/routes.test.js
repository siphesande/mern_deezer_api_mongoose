import request from "supertest";
import app from "../app";

describe('Sample Test to test if My TTD is fine', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })

describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response).not.toBeNull();
        expect(response).toBeDefined();
    });
});


describe("Test the unmatching the Request", () => {
    test("It should response with 404 when the server The server has not found anything matching the Request", async () => {
        const response = await request(app).get("/testing");
        expect(response.statusCode).toBe(404);
    });
});


describe("Test '/api/artist_details' POST request ", () => {
    test("It should response to the POST method (/api/artist_details)", async () => {
        const response = await request(app)
        .post("/api/artist_details")
        expect(response.statusCode).toEqual(200)
        //expect(response.body).toHaveProperty('post')
    });
});


describe("Test /api/albums POST request", () => {
    test("It should response with 200 when the server The server has found anything matching the Request", async () => {
        const response = await request(app)
        .post("/api/albums")
        .send({ data: 'Adel', });
        expect(response.statusCode).toEqual(200)
        //expect(response.body).toHaveProperty('post')
        expect(response).not.toBeNull();
        expect(response).toBeDefined();
    });
});