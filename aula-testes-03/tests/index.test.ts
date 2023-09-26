import calculator from "./../src/calculator";

describe("quatro opereções básicas", ()=>{
    it("deveria retornar a soma de dois números", ()=>{
        expect(1+2).toBe(3)
    });
    it("deveria retornar a diferença entre dois números",()=>{
        expect(1-2).toBe(-1)
    });
    it("deveria retornar a razão entre dois números", ()=>{
        expect(1/2).toBe(0.5);
    });
    it("deveria retornar a multiplicação de dois números", ()=>{
        expect(1*2).toBe(2)
    });
});