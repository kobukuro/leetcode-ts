import {containsDuplicate} from './solution';

describe('containsDuplicate', () => {
    it('should return true for nums=[1,2,3,1]', () => {
        const nums = [1, 2, 3, 1];
        const result = containsDuplicate(nums);

        expect(result).toEqual(true);
    });

    it('should return false for nums=[1,2,3,4]', () => {
        const nums = [1, 2, 3, 4];
        const result = containsDuplicate(nums);

        expect(result).toEqual(false);
    });

    it('should return true for nums=[1,1,1,3,3,4,3,2,4,2]', () => {
        const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
        const result = containsDuplicate(nums);

        expect(result).toEqual(true);
    });
});