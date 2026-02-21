// Tags: DFS

/**
 * Helper function that performs DFS to calculate the area of an island.
 *
 * @param r - Current row position
 * @param c - Current column position
 * @param grid - The 2D grid
 * @param visited - Set to track visited cells
 * @returns The area of the island starting from (r, c)
 */
function dfs(r: number, c: number, grid: number[][], visited: Set<string>): number {
    const key = r + ',' + c;
    if (r < 0 || r === grid.length || c < 0 || c === grid[0].length || grid[r][c] === 0 || visited.has(key)) {
        return 0;
    }
    visited.add(key);
    return 1 + dfs(r + 1, c, grid, visited) + dfs(r - 1, c, grid, visited) + dfs(r, c + 1, grid, visited) + dfs(r, c - 1, grid, visited);
}

/**
 * Finds the maximum area of an island in a 2D grid using DFS.
 * An island is formed by connecting adjacent lands horizontally or vertically.
 *
 * Time Complexity: O(m * n) where m is the number of rows and n is the number of columns
 * - We iterate through every cell in the grid once: O(m * n)
 * - Each cell is visited at most once due to the visited set
 * - DFS exploration for each cell is O(1) amortized due to visited tracking
 *
 * Space Complexity: O(m * n)
 * - Visited set stores at most m * n cell coordinates as strings
 * - DFS recursion stack can go as deep as m * n in the worst case (all cells form one island)
 * - Total space: O(m * n) for visited set + O(m * n) for call stack = O(m * n)
 */
export function maxAreaOfIsland(grid: number[][]): number {
    let res = 0;
    const visited = new Set<string>();
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            res = Math.max(res, dfs(r, c, grid, visited));
        }
    }
    return res;
}