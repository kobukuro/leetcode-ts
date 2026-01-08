// Tags: String

/**
 * Time complexity: O(n).
 * - We iterate through each character in the string s once.
 * - Array push operations are O(1) amortized, and join is O(n).
 *
 * Space complexity: O(n).
 * - The result array can contain up to n characters in the worst case (when there are no vowels).
 */
export function removeVowels(s: string): string {
    const res: string[] = [];
    for (const c of s) {
        if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u') {
            res.push(c);
        }
    }
    return res.join('');
}