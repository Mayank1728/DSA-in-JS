// functions to invert a binary tree

// using BFS
function invertTree(root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let curr = queue.shift();

    // swapping left and right subtrees
    let temp = curr.left;
    curr.left = curr.right;
    curr.right = temp;

    // now add left and right subtrees into
    // the queue to invert them as well
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return root;
}

// using DFS
function invertTreeDFS(root) {
  if (!root) return null;
  function dfs(root) {
    if (!root) return;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return root;
}

// Time : O(N)
// Space : O(H) H is height of the binary Tree
