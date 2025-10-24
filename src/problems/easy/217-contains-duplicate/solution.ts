// Tags: Hash Set

/**
 * Time complexity: O(n).
 * - We iterate through n elements, calling has() for each and add() only for unique elements,
 *   with each operation taking constant time.
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