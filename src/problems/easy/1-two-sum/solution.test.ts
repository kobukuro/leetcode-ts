import { twoSum } from './solution'

describe('twoSum', () => {
    it('should return indices [0, 1] or [1, 0] for nums=[2,7,11,15] and target=9', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);

        expect(result.sort()).toEqual([0, 1]);
    });

    it('should return indices [1, 2] or [2, 1] for nums=[3,2,4] and target=6', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);

        expect(result.sort()).toEqual([1, 2]);
    });

    it('should return indices [0, 1] or [1, 0] for nums=[3,3] and target=6', () => {
        const nums = [3, 3];
        const target = 6;
        const result = twoSum(nums, target);

        expect(result.sort()).toEqual([0, 1]);
    });
});
