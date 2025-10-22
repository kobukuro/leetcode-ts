// Tags: Matrix, DFS, Dynamic Programming, Graph


function dfs(r: number, c: number, matrix: number[][], prev: number, memo: Map<string, number>) {
    if (r < 0 || r === matrix.length || c < 0 || c === matrix[0].length || matrix[r][c] <= prev) {
        return 0;
    }
    const key = r + ',' + c;
    if (memo.has(key)) {
        return memo.get(key);
    }
    memo.set(key, 1 + Math.max(dfs(r + 1, c, matrix, matrix[r][c], memo), dfs(r - 1, c, matrix, matrix[r][c], memo), dfs(r, c + 1, matrix, matrix[r][c], memo), dfs(r, c - 1, matrix, matrix[r][c], memo)))
    return memo.get(key);
}

/**
 * Finds the length of the longest increasing path in a matrix.
 * Uses DFS with memoization to explore all possible paths starting from each cell.
 *
 * Time Complexity: O(m * n)
 * - Each cell is computed once and cached in the memo map
 * - We visit each cell at most once during DFS due to memoization
 * - m = number of rows, n = number of columns
 *
 * Space Complexity: O(m * n)
 * - Memo map stores at most m * n entries (one for each cell)
 * - Recursion stack can go up to O(m * n) in worst case (e.g., snake path)
 * - Overall space complexity is O(m * n)
 */
export function longestIncreasingPath(matrix: number[][]): number {
    const memo = new Map<string, number>();
    let res = 0;
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            res = Math.max(res, dfs(r, c, matrix, -1, memo));
        }
    }
    return res;
}


