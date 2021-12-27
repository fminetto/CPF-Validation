import { isCNPJValid } from "../src";

describe("Testing some cnpj's", ()=>{
    it("Invalids known CNPJ", ()=>{
        expect(isCNPJValid("04.178.429/0001-23")).toBe(false);
        expect(isCNPJValid("11.111.111/1111-11")).toBe(false);
        expect(isCNPJValid("22.222.222/2222-22")).toBe(false);
        expect(isCNPJValid("33.333.333/3333-33")).toBe(false);
        expect(isCNPJValid("44.444.444/4444-44")).toBe(false);
        expect(isCNPJValid("55.555.555/5555-55")).toBe(false);
        expect(isCNPJValid("66.666.666/6666-66")).toBe(false);
        expect(isCNPJValid("77.777.777/7777-77")).toBe(false);
        expect(isCNPJValid("88.888.888/8888-88")).toBe(false);
        expect(isCNPJValid("99.999.999/9999-99")).toBe(false);
        expect(isCNPJValid("00.000.000/0000-00")).toBe(false);
        expect(isCNPJValid("23.632.872/0001-79")).toBe(false);
    });

    it("Valid CNPJ's", ()=>{
        expect(isCNPJValid("44.170.010/0001-40")).toBe(true);
        expect(isCNPJValid("74.735.095/0001-28")).toBe(true);
        expect(isCNPJValid("74.008.316/0001-66")).toBe(true);
        expect(isCNPJValid("20.603.395/0001-24")).toBe(true);
        expect(isCNPJValid("82.452.214/0001-63")).toBe(true);
        expect(isCNPJValid("22.089.298/0001-90")).toBe(true);
        expect(isCNPJValid("61.700.140/0001-67")).toBe(true);
        expect(isCNPJValid("11.086.962/0001-21")).toBe(true);
        expect(isCNPJValid("49.951.093/0001-29")).toBe(true);
        expect(isCNPJValid("86.370.157/0001-24")).toBe(true);
        expect(isCNPJValid("01.903.256/0001-71")).toBe(true);
        expect(isCNPJValid("68.895.529/0001-54")).toBe(true);
    });
});