// Tags: Array, Binary Search

/**
 * Performs binary search on a sorted array to find the target value.
 *
 * Time Complexity: O(log n) where n is the length of the array
 * - Each iteration eliminates half of the remaining search space
 * - Maximum number of iterations is log₂(n)
 *
 * Space Complexity: O(1)
 * - Only uses constant extra space for pointers (l, r, mid)
 * - No recursive calls or additional data structures
 */
export function search(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}