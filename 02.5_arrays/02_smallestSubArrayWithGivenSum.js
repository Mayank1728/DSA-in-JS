// Given array of +ve integers find Minimum size of the subArray
// whose sum is >= target
// [3, 2, 1, 5, 6] , 6 => 1
// [2, 3, 1, 2, 4, 3], 7 => 2

// BruteForce O(N^2)
function minSubarraySize(nums, k) {
  let sum = 0;
  let minSize = Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    let j;
    for (j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum >= k) {
        minSize = Math.min(minSize, j - i + 1);
        break;
      }
    }
  }
  return minSize == Infinity ? 0 : minSize;
}
console.log(minSubarraySize([2, 3, 1, 2, 4, 3], 7));

// Sliding Window
function minSubArraySize(nums, k) {
  let sum = 0;
  let sw = 0;
  let minSize = Infinity;
  for (let ew = 0; ew < nums.length; ew++) {
    sum += nums[ew];
    while (sum >= k) {
      minSize = Math.min(minSize, ew - sw + 1);
      sum -= nums[sw];
      sw++;
    }
  }
  return minSize == Infinity ? 0 : minSize;
  // Time : O(N)
  // Space : O(1)
}
console.log(minSubArraySize([5, 1, 1, 9], 7));
