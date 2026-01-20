import { reverseString } from './solution';

describe('reverseString', () => {
    it('Example 1: should reverse ["h","e","l","l","o"] to ["o","l","l","e","h"]', () => {
        const input = ["h", "e", "l", "l", "o"];
        reverseString(input);
        expect(input).toEqual(["o", "l", "l", "e", "h"]);
    });

    it('Example 2: should reverse ["H","a","n","n","a","h"] to ["h","a","n","n","a","H"]', () => {
        const input = ["H", "a", "n", "n", "a", "h"];
        reverseString(input);
        expect(input).toEqual(["h", "a", "n", "n", "a", "H"]);
    });
});
