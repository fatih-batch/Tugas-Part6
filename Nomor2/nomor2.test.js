const findMinMax = require("./nomor2");

test("Test 1", () => {
    expect(findMinMax([3, -3, 2, 5, 8, -2])).toEqual("min: -3 index: 1 max: 8 index: 4");
});
test("Test 2", () => {
    expect(findMinMax([5, 2, 4, -1, -2, 9])).toEqual("min: -2 index: 4 max: 9 index: 5");
});
test("Test 3", () => {
    expect(findMinMax([8, 7, 7, 18, -20, 0])).toEqual("min: -20 index: 4 max: 18 index: 3");
});
test("Test 4", () => {
    expect(findMinMax([-7, -4, 9, 6, 4, 5])).toEqual("min: -7 index: 0 max: 9 index: 2");
});
test("Test 5", () => {
    expect(findMinMax([2, -5, -4, 22, 7, 7])).toEqual("min: -5 index: 1 max: 22 index: 22");
});