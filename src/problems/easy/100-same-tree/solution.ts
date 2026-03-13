// Tags: Tree, DFS
import {TreeNode} from '../../../common';

/**
 * Time complexity : O(N), where N is a number of nodes in the tree, since one visits each node exactly once.
 *
 * Space complexity : O(N) in the worst case of completely unbalanced tree, to keep a recursion stack.
 */
export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null && q === null) {
        return true;
    }
    if (p === null) {
        return false;
    }
    if (q === null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}