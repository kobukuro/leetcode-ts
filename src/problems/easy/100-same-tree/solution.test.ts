import {isSameTree} from './solution';
import {TreeNode} from '../../../common';

describe('isSameTree', () => {
    it('Example 1: p = [1,2,3], q = [1,2,3]', () => {
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(isSameTree(p, q)).toBe(true);
    });

    it('Example 2: p = [1,2], q = [1,null,2]', () => {
        const p = new TreeNode(1, new TreeNode(2), null);
        const q = new TreeNode(1, null, new TreeNode(2));
        expect(isSameTree(p, q)).toBe(false);
    });

    it('Example 3: p = [1,2,1], q = [1,1,2]', () => {
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(1));
        const q = new TreeNode(1, new TreeNode(1), new TreeNode(2));
        expect(isSameTree(p, q)).toBe(false);
    });
});
