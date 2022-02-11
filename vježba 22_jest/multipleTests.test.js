const shoppingList = [
    "pelene",
    "jaja",
    "brašno",
    "mlijeko",
    "papirnati ručnici"
];

test("ima li moja shopping lista brašno?", () => { 
    expect(shoppingList).toContain("brašno");
});

test("ima li moja shopping lista banane?", () => { 
    expect(shoppingList).toContain("banane");
});

test("je li moja konstanta NULL", () => {
const ns = null;
expect(ns).toBeNull();
expect(ns).toBeDefined();
expect(ns).not.toBeUndefined();
 });

 test("dodavanje pozitivnih brojeva nije nula", () => {
     for (let i = 1; i < 10; i++) {
         for (let j = 1; j < 10; j++) {
             expect(i + j).not.toBe(0);
         }
     }
 });