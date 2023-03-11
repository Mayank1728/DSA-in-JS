// leetcode 219

function containsDupII(nums, k) {
  let start = 0;
  let map = new Map();
  for (let end = 0; end < nums.length; end++) {
    if (end - start > k) map.delete(nums[start++]);
    if (!map.has(nums[end])) map.set(nums[end], end);
    else return true;
  }
  return false;
}
