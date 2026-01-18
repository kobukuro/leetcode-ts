import {maxArea} from './solution';

describe('maxArea', () => {
    it('Example 1: height = [1,8,6,2,5,4,8,3,7]', () => {
        const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
        const result = maxArea(height);
        expect(result).toBe(49);
        // Explanation: The max area is between index 1 (height=8) and index 8 (height=7)
        // Area = min(8, 7) * (8 - 1) = 7 * 7 = 49
    });

    it('Example 2: height = [1,1]', () => {
        const height = [1, 1];
        const result = maxArea(height);
        expect(result).toBe(1);
        // Explanation: The only possible container has area = min(1, 1) * (1 - 0) = 1
    });
});

