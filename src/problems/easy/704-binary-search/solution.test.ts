import { search } from './solution';

describe('search', () => {
    it('Example 1: should return 4 when target 9 exists in nums = [-1,0,3,5,9,12]', () => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const target = 9;
        expect(search(nums, target)).toBe(4);
    });

    it('Example 2: should return -1 when target 2 does not exist in nums = [-1,0,3,5,9,12]', () => {
        const nums = [-1, 0, 3, 5, 9, 12];
        const target = 2;
        expect(search(nums, target)).toBe(-1);
    });
});
