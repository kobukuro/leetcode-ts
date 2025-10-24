// Tags: Hash Table

/**
 * Time complexity: O(n).
 * - We traverse the array containing n elements only once.
 * - Each lookup in the Map costs only O(1) time.
 *
 * Space complexity: O(n).
 * - The extra space required depends on the number of items stored in the Map,
 * - which stores at most n elements.
 */
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