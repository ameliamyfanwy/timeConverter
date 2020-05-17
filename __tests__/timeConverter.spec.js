describe("Rounding function", () => {
    test("It should provide the time to nearest 5 mins", () => {
        const input = 4020;          
        const output = "70 minutes";
        expect(roundUpTime(input)).toEqual(output);
    });
    test("It should provide the time to nearest 5 mins", () => {
        const input = 10800;          
        const output = "180 minutes";
        expect(roundUpTime(input)).toEqual(output);
    });
    test("It should provide the time to nearest 5 mins", () => {
        const input = 8594;          
        const output = "145 minutes";
        expect(roundUpTime(input)).toEqual(output);
    });
    test("It should provide the time to nearest 5 mins", () => {
        const input = 2715;          
        const output = "50 minutes";
        expect(roundUpTime(input)).toEqual(output);
    });
});