// Max depth of binary Tree OR Height of the binary tree

// dfs: finding height of each node to find height of the tree
function maxDepth(root) {
  if (!root) return 0;

  let leftSubtreeHeight = maxDepth(root.left);
  let rightSubtreeHeight = maxDepth(root.right);

  return Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
}

// bfs: counting no of levels to find height
function maxDepthBFS(root) {
  if (!root) return 0;
  let queue = [root];
  let height = 0;
  while (queue.length) {
    let ql = queue.length;
    for (let i = 0; i < ql; i++) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    height++;
  }
  return height;
}

// Time : O(N)
// Space : O(H)
