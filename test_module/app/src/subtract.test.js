var sub = require('./subtract');

var A = describe("Suit A", function() {
    it("Case 1", function() {
        expect(true).toBe(true);
    });
    it("Case 2", function() {
        expect(true).toBe(true);
    });
    it("Case 3", function() {
        expect(true).toBe(true);
    });
    it("Case 4",
        function() {
            expect(sub(10,6)).toEqual(4);
        });
});

module.exports = A;