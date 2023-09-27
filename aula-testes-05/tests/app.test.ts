import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  });
  it('should return 400 when ask/fibonacci has an invalid query', async () => {
    const result1 = await api.get("/fibonacci?elements=x");
    expect(result1.status).toBe(400);

    const result2 = await api.get("/fibonacci?elements=0");
    expect(result2.status).toBe(400);
    
    const result3 = await api.get(`/fibonacci?elements=${Infinity + 1}`);
    expect(result3.status).toBe(400);
    
  });
  it("should return 200 and an array when ask/fibonacci an valid query",async () => {
    const result1 = await api.get("/fibonacci?elements=1")
    console.log(result1.body)
    expect(result1.status).toBe(200)
    expect(result1.body).toHaveLength(1)

    const result2 = await api.get("/fibonacci?elements=2")
    console.log(result2.body)
    expect(result2.status).toBe(200)
    expect(result2.body).toHaveLength(2)

    const result3 = await api.get("/fibonacci?elements=3")
    console.log(result3.body)
    expect(result3.status).toBe(200)
    expect(result3.body).toHaveLength(3)

  })
})