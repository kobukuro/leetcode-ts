import {maxAreaOfIsland} from './solution';

describe('maxAreaOfIsland', () => {
    it('Example 1: should return 6 for grid with connected island (4-directional)', () => {
        const grid = [
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
        ];
        expect(maxAreaOfIsland(grid)).toBe(6);
    });

    it('Example 2: should return 0 for grid with no islands (all zeros)', () => {
        const grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
        expect(maxAreaOfIsland(grid)).toBe(0);
    });
});
