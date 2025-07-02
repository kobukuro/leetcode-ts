import {twoSum} from './solution';

test('twoSum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
    expect(twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
});