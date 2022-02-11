const testArray = [1, -72, 10, -4, 0, 0.0001, 999, 132914];

function findMax(numbers) {
    if (!numbers) {
        return undefined;
    }
    var i;
    var max = -Infinity;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
module.exports = findMax;

test("ima li moj array broj 10?", () => { 
    expect(testArray).toContain(10);
});

test("je li najveći broj 132914?", () => { 
    expect(findMax(testArray)).toBe(132914);
});

test("return -infinity for empty array", () => { 
    expect(findMax([])).toBe(-Infinity);
});

test("return undefined for no argument", () => { 
    expect(findMax()).toBe(undefined);
});

test("ima li moj array broj 5?", () => { 
    expect(testArray).toContain(5);
});

