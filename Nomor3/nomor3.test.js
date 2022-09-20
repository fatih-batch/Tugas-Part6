const maxBuy = require("./nomor3");

test("Test 1", () => {
    expect(maxBuy(50000, [25000, 25000, 10000, 14000])).toEqual(3);
});
test("Test 2", () => {
    expect(maxBuy(30000, [15000, 10000, 12000, 5000, 3000])).toEqual(4);
});
test("Test 3", () => {
    expect(maxBuy(10000, [2000, 3000, 1000, 2000, 10000])).toEqual(4);
});
test("Test 4", () => {
    expect(maxBuy(4000, [7500, 3000, 2500, 2000])).toEqual(1);
});
test("Test 5", () => {
    expect(maxBuy(0, [10000, 30000])).toEqual(0);
});