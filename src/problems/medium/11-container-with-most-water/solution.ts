// Tags: Two Pointers, Greedy

/**
 * Finds the maximum area of water that can be contained between two vertical lines.
 * Uses two pointers approach starting from both ends and moving inward.
 *
 * Time Complexity: O(n)
 * - We traverse the array once with two pointers moving towards each other
 * - Each element is visited at most once
 *
 * Space Complexity: O(1)
 * - Only uses a constant amount of extra space for variables (res, l, r, area)
 * - No additional data structures are used
 */
export function maxArea(height: number[]): number {
    let res = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const area = Math.min(height[l], height[r]) * (r - l);
        res = Math.max(res, area);
        if (height[l] > height[r]) {
            r--;
        } else {
            l++;
        }
    }
    return res;
}