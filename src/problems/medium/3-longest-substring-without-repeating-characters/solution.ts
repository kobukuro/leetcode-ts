// Tags: Sliding Window

/**
 * Finds the length of the longest substring without repeating characters
 * using a sliding window approach.
 *
 * Time Complexity: O(n) where n is the length of the string
 * - The right pointer (r) traverses the string once: O(n)
 * - The left pointer (l) also moves at most n times throughout the entire algorithm
 * - Each character is added to and removed from the set at most once
 * - Set operations (has, add, delete) are O(1) average case
 *
 * Space Complexity: O(min(n, m)) where n is the string length and m is the charset size
 * - The set stores at most min(n, m) characters
 * - For ASCII, m = 128; for extended ASCII, m = 256
 * - In the worst case (all unique characters), the set contains n characters
 */
export function lengthOfLongestSubstring(s: string): number {
    let res = 0;
    let l = 0;
    const seen = new Set<string>();
    for (let r = 0; r < s.length; r++) {
        while (seen.has(s[r])) {
            seen.delete(s[l]);
            l++;
        }
        res = Math.max(res, r - l + 1);
        seen.add(s[r]);
    }
    return res;
}