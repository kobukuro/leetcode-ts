// Tags: Array, String, Simulation

/**
 * Time Complexity: O(n)
 * - We iterate through the operations array once, where n is the length of the array
 * - Each operation performs a constant time check and increment/decrement
 *
 * Space Complexity: O(1)
 * - We only use a single variable to track the result
 * - No additional data structures are used
 */
export function finalValueAfterOperations(operations: string[]): number {
    let res = 0;
    for (const operation of operations) {
        if (operation[1] === '+') {
            res++;
        } else {
            res--;
        }
    }
    return res;
}