// given root of 2 trees compare if they are same or not
// same means structurally and identical values

function isSameTree(p, q) {
  if (!p && !q)
    // when none of the node exists
    return true;
  else if (p && q) {
    // when both of them exists
    if (p.val != q.val) return false; // but have diff values
    let left = isSameTree(p.left, q.left);
    let right = isSameTree(p.right, q.right);
    return left && right;
  } else return false; // when ONLY one of them exists
}
