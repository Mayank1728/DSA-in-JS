// SubTree of another tree
function subTree(root, subRoot) {
  // applying bfs for traversing
  let isSubFound = false;
  function bfs(root) {
    let queue = [root];
    while (queue.length && !isSubFound) {
      let curr = queue.shift();
      if (curr.val === subRoot.val) isSubFound = isSameTree(curr, subRoot);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
  function isSameTree(root, subRoot) {
    if (!root && !subRoot) return true;
    else if (root && subRoot) {
      if (root.val != subRoot.val) return false;
      let left = isSameTree(root.left, subRoot.left);
      let right = isSameTree(root.right, subRoot.right);
      return left && right;
    } else return false;
  }
  bfs(root);
  return isSubFound;
  // Time : O(R * S)
}
