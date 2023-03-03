/* 
   Steps for sliding window approach for FIXED LENGTH
   1. first build the window
   2. then move by removing the start and adding end
   
*/

// [7, 8, 1, 4, 2, 9, 11, 3, 2], k = 4

//BruteForce Approach
function maxSumSubArraySizeK(nums, k) {
  let result = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }
    result.push(sum);
  }
  console.log(result);
  // Time : O((N - k) * K) = O(N*k)
  // Space : O(1)
}
maxSumSubArraySizeK([7, 8, 1, 4, 2, 9, 11, 3, 2], 4);

//Sliding Window approach
function maxSumSubarraySizeK(nums, k) {
  let sum = 0;
  let startWin = 0;
  let endWin = 0;
  let result = [];
  for (endWin = 0; endWin < nums.length; endWin++) {
    sum += nums[endWin];
    if (endWin >= k - 1) {
      result.push(sum);
      sum -= nums[startWin];
      startWin++;
    }
  }
  console.log(result);
  // Time : O(N)
  // Space : O(1)
}
maxSumSubarraySizeK([7, 8, 1, 4, 2, 9, 11, 3, 2], 5);
