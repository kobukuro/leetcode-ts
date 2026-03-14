// Tags: Array, Matrix

/**
 * Let M be the number of customers, and N be the number of accounts per customer.
 *
 * Time complexity: O(M * N)
 * Breakdown:
 * - Outer loop: Iterates through M customers (accounts.length)
 * - Inner loop: For each customer, iterates through N accounts (customerAccounts.length)
 * - Total iterations: M * N where M is the number of customers and N is the number of accounts per customer
 *
 * Space complexity: O(1)
 * Breakdown:
 * - Uses only constant extra space (res and currCustomerWealth variables)
 * - No additional data structures that scale with input size
 */
export function maximumWealth(accounts: number[][]): number {
    let res = 0;
    for (const customerAccounts of accounts) {
        let currCustomerWealth = 0;
        for (const account of customerAccounts) {
            currCustomerWealth += account;
        }
        res = Math.max(res, currCustomerWealth);
    }
    return res;
}