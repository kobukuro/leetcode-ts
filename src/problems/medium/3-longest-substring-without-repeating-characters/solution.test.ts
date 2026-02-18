import { lengthOfLongestSubstring } from './solution';

describe('lengthOfLongestSubstring', () => {
    it('Example 1: should return 3 for "abcabcbb" (substring "abc")', () => {
        const s = "abcabcbb";
        expect(lengthOfLongestSubstring(s)).toBe(3);
    });

    it('Example 2: should return 1 for "bbbbb" (substring "b")', () => {
        const s = "bbbbb";
        expect(lengthOfLongestSubstring(s)).toBe(1);
    });

    it('Example 3: should return 3 for "pwwkew" (substring "wke")', () => {
        const s = "pwwkew";
        expect(lengthOfLongestSubstring(s)).toBe(3);
    });
});
