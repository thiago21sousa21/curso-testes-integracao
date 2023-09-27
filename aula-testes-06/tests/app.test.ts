import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  // TODO
  it("deveria receber 200", async()=>{
    const result = await api.get("/event")
    expect(result.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        title: expect.any(String),
        image: expect.any(String),
        date: expect.any(String)
      })
    )
    expect(result.status).toBe(200) 
  });
});