// Leetcode 121

// Tip:  Try to use for-loop instead of while-loop
// u get better intution about the time complexity

// bruteforce
function maxProfit(profit) {
  let maxProfit = 0;
  for (let i = 0; i < profit.length; i++) {
    let gain;
    for (let j = i + 1; j < profit.length; j++) {
      gain = profit[j] - profit[i];
      maxProfit = Math.max(maxProfit, gain);
    }
  }
  return maxProfit;
  // Time : O(N^2)
  // Space : O(1)
}
console.log(maxProfit([7, 6, 4, 3, 1]));

// Sliding Window
function maxProfit(prices) {
  let start = 0;
  let maxProfit = 0;
  for (let end = 0; end < prices.length; end++) {
    let gain = prices[end] - prices[start];
    if (gain < 0) {
      start = end;
    } else {
      maxProfit = Math.max(maxProfit, gain);
    }
  }
  return maxProfit;
  // Time : O(N)
  // Space : O(1)
}
