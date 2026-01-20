// Tags: String, Two Pointers

/**
 * Reverses a string array in-place using two pointers.
 *
 * Time Complexity: O(n) where n is the length of the array
 * - We iterate through half of the array, performing constant-time swaps
 *
 * Space Complexity: O(1)
 * - Only uses two pointers (l and r), no additional data structures
 * - Modifies the array in-place as required
 */
export function reverseString(s: string[]): void {
    let l = 0;
    let r = s.length - 1;
    while (l <= r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
    }
}