import { isCPFValid } from "../src";

describe("Testing some cpf's", ()=>{
    it("Invalids known CPF", ()=>{
        expect(isCPFValid("111.111.111-11")).toBe(false);
        expect(isCPFValid("222.222.222-22")).toBe(false);
        expect(isCPFValid("333.333.333-33")).toBe(false);
        expect(isCPFValid("444.444.444-44")).toBe(false);
        expect(isCPFValid("555.555.555-55")).toBe(false);
        expect(isCPFValid("666.666.666-66")).toBe(false);
        expect(isCPFValid("777.777.777-77")).toBe(false);
        expect(isCPFValid("888.888.888-88")).toBe(false);
        expect(isCPFValid("999.999.999-99")).toBe(false);
        expect(isCPFValid("000.000.000-00")).toBe(false);
        expect(isCPFValid("testing string")).toBe(false);
        expect(isCPFValid("537.510.300-17")).toBe(false);
    });

    it("Valid CPF's", ()=>{
        expect(isCPFValid("838.521.610-37")).toBe(true);
        expect(isCPFValid("353.798.380-81")).toBe(true);
        expect(isCPFValid("733.697.730-82")).toBe(true);
        expect(isCPFValid("436.635.070-09")).toBe(true);
        expect(isCPFValid("739.349.400-05")).toBe(true);
        expect(isCPFValid("420.376.450-58")).toBe(true);
        expect(isCPFValid("835.485.340-31")).toBe(true);
        expect(isCPFValid("918.287.920-63")).toBe(true);
        expect(isCPFValid("037.001.840-00")).toBe(true);
        expect(isCPFValid("924.510.450-86")).toBe(true);
        expect(isCPFValid("565.970.930-38")).toBe(true);
        expect(isCPFValid("855.575.090-38")).toBe(true);
    });
});