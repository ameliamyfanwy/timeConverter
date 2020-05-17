const timeConverter= require("../timeConverter");

describe("Rounding function", () => {
    test("Convert 4020 seconds to 70 minutes", () => {
        const input = 4020;          
        const output = "70 minutes";
        expect(timeConverter(input)).toEqual(output);
    });
    test("Convert 1800 seconds to 180 minutes", () => {
        const input = 10800;          
        const output = "180 minutes";
        expect(timeConverter(input)).toEqual(output);
    });
    test("Convert 8594 seconds to 145 minutes", () => {
        const input = 8594;          
        const output = "145 minutes";
        expect(timeConverter(input)).toEqual(output);
    });
    test("Convert 2715 seconds to 50 minutes", () => {
        const input = 2715;          
        const output = "50 minutes";
        expect(timeConverter(input)).toEqual(output);
    });
});