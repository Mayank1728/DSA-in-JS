// Function to find diameter of a binary tree

function diameter(root) {
  let maxDia = 0;
  function height(root) {
    if (!root) return 0;

    let leftH = height(root.left);
    let rightH = height(root.right);
    let dia = leftH + rightH;
    maxDia = Math.max(maxDia, dia);
    return Math.max(leftH, rightH) + 1;
  }
  height(root);
  return maxDia;
  // Time : O(N)
  // Space : O(H)
}
