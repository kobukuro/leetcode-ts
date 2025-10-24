// Tags: Hash Set

/**
 * Time complexity: O(n).
 * - We do search() and insert() for n times and each operation takes constant time.
 *
 * Space complexity: O(n).
 * - The space used by a Set is linear with the number of elements in it.
 */
export function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}