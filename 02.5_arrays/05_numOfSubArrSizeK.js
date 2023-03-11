// 1343
/* 
   start = 0;
   
*/
function numOfSubArrays(arr, k, threshold) {
  let start = 0;
  let sum = 0;
  let res = 0;
  for (let end = 0; end < arr.length; end++) {
    if (end - start > k - 1) sum = sum - arr[start++];
    sum = sum + arr[end];
    if (sum / (end - start + 1) >= threshold && end - start + 1 == k) res++;
  }
  return res;
}
console.log(numOfSubArrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
