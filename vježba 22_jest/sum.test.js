const sum = require("./sum");

test("zbrajanje - 6 + 5 = 11", () => {
    expect(sum(6, 5)).toBe(11);
});

test("zbrajanje - 6 + 5 = 12", () => {
    expect(sum(6, 5)).toBe(12);
});