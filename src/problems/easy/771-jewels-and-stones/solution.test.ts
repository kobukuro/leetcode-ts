import {numJewelsInStones} from './solution';

describe('numJewelsInStones', () => {
    it('Example 1: jewels = "aA", stones = "aAAbbbb"', () => {
        expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
    });

    it('Example 2: jewels = "z", stones = "ZZ"', () => {
        expect(numJewelsInStones("z", "ZZ")).toBe(0);
    });
});
