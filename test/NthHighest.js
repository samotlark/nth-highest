const assert = require("assert");
const findNthHighest = require("../NthHighest");

describe("NthHighest", () => {
    it("Basic Test", () => {
        assert.equal(findNthHighest([8, 6, 2, 4], 2), 6);
        assert.equal(findNthHighest([8, 6, 2, 4], 1), 8);
        assert.equal(findNthHighest([8, 6, 2, 4], 4), 2);

        assert.equal(findNthHighest([9, 6, 2, 7, 5], 2), 7);

        assert.equal(findNthHighest([4, 7, 2, 1], 2), 4);
        assert.equal(findNthHighest([4, 7, 2, 1, 5], 2), 5);

        assert.equal(findNthHighest([1, 3, 4, 2], 2), 3);
        assert.equal(findNthHighest([3, 4, 7, 6, 8], 2), 7);
        assert.equal(findNthHighest([3, 4, 7, 6], 2), 6);
        assert.equal(findNthHighest([3, 4, 7, 6, 5], 2), 6);

        assert.equal(findNthHighest([1, 2, 10], 1), 10);
    });

    it("Special Test", () => {
        assert.equal(findNthHighest([7], 1), 7);
        assert.equal(findNthHighest([3, 4, 7, 7, 6, 5], 2), 6);
        assert.equal(findNthHighest([3, 4, 7, 6, 6, 5], 2), 6);

        assert.equal(findNthHighest([7], 2), null);
        assert.equal(findNthHighest([7, 7], 2), null);
        assert.equal(findNthHighest([7], 0), null);
        assert.equal(findNthHighest([3, 4, 7, 6, 6, 5], 1000000), null);
    });

    it("Long Test", () => {
        let array = Array.from(Array(1000000).keys());
        Object.freeze(array);
        assert.equal(findNthHighest(array, 2), 999998);
        assert.equal(findNthHighest(array, 50000, true), 1000000 - 50000);
    });
});