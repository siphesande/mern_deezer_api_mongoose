import supertest from "supertest";
import app from "../../src/app";

describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });
});


describe("Test the root path", () => {
    test("It should response with 404 when the server The server has not found anything matching the Request", async () => {
        const response = await request(app).get("/testing");
        expect(response.statusCode).toBe(404);
    });
});


describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/api/artist_details");
        expect(response.statusCode).toBe(200);
    });
});



describe("Test the root path", () => {
    test("It should response with 404 when the server The server has not found anything matching the Request", async () => {
        const response = await request(app).get("/api/albums");
        expect(response.statusCode).toBe(200);
    });
});