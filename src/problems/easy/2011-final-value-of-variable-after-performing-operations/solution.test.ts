import {finalValueAfterOperations} from './solution';

describe('finalValueAfterOperations', () => {
    it('Example 1: ["--X","X++","X++"] should return 1', () => {
        const operations = ["--X", "X++", "X++"];
        expect(finalValueAfterOperations(operations)).toBe(1);
    });

    it('Example 2: ["++X","++X","X++"] should return 3', () => {
        const operations = ["++X", "++X", "X++"];
        expect(finalValueAfterOperations(operations)).toBe(3);
    });

    it('Example 3: ["X++","++X","--X","X--"] should return 0', () => {
        const operations = ["X++", "++X", "--X", "X--"];
        expect(finalValueAfterOperations(operations)).toBe(0);
    });
});
