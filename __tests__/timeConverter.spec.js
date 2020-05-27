const timeConverter= require("../timeConverterFunc");

describe("Rounding function", () => {
    test("Convert 4020 seconds to 70 minutes", () => {
        const input = 4020;          
        const output = "1 hour 10 minutes";
        expect(timeConverter(input)).toEqual(output);
    });
    test("Convert 4020 seconds to 70 minutes", () => {
        const input = 7200;          
        const output = "2 hours 0 minutes";
        expect(timeConverter(input)).toEqual(output);
    });
    test("Convert 1800 seconds to 0 hours and 30 minutes", () => {
        const input = 1800;          
        const output = "0 hours 30 minutes";
        expect(timeConverter(input)).toEqual(output);
    });
    test("Convert 1740 seconds to 0 hours and 30 minutes", () => {
        const input = 1740;          
        const output = "0 hours 30 minutes";
        expect(timeConverter(input)).toEqual(output);
    });
    // test("Convert 1800 seconds to 180 minutes", () => {
    //     const input = 10800;          
    //     const output = "180 minutes";
    //     expect(timeConverter(input)).toEqual(output);
    // });
    // test("Convert 8594 seconds to 145 minutes", () => {
    //     const input = 8594;          
    //     const output = "145 minutes";
    //     expect(timeConverter(input)).toEqual(output);
    // });
    // test("Convert 2715 seconds to 50 minutes", () => {
    //     const input = 2715;          
    //     const output = "50 minutes";
    //     expect(timeConverter(input)).toEqual(output);
    // });
    // test("Convert 300 + 60 to 10 minutes", () => {
    //     const input = "300 + 60";
    //     const output = "Please enter a number only";
    //     expect(timeConverter(input)).toEqual(output);
    // })
});