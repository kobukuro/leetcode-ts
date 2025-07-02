export function twoSum(nums: number[], target: number): number[] {
    const lookup = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (lookup.has(complement)) {
            return [lookup.get(complement), i];
        }
        lookup.set(nums[i], i);
    }
    return [];
}