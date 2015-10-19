var add = require('./add');

var A = describe("Suit A", function() {
        it("Add Test 1", function() {
            expect(true).toBe(true);
        });
        it("Add Test 2", function() {
             expect(true).toBe(true);
        });
        it("Add Test 3", function() {
            expect(true).toBe(true);
        });
        it("works for simple literals and variables",
            function() {
            expect(add(6,6)).toEqual(12);

    });
});

module.exports = A;