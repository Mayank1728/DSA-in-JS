// balanced binary tree

/* 
   Intuition behind isBalanced
    1. NULL node is balanced & height = 0;  [0, true]
    2. height of curr Node = Max(left height, right height) + 1;
    3. Node is balanced when all 3 conditions are ment
       3.1 diff b/w height of left and right subtrees is <= 1
       3.2 left subtree is balanced
       3.3 right subtree is balanced
*/
function isBalanced(root) {
  if (!root) return true;
  function dfs(root) {
    if (!root) return [0, true]; // [height, isBalanced]

    let left = dfs(root.left);
    let right = dfs(root.right);

    // finding the height of the curr node
    let height = Math.max(left[0], right[0]) + 1;
    let isHeightBal = Math.abs(left[0] - right[0]) <= 1;
    let isBal = left[1] && right[1] && isHeightBal;

    return [height, isBal];
  }
  let ans = dfs(root);
  return ans[1];
}
