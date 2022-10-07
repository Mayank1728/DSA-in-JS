// generating subarrays
/*
 A subarray is a continious part of an array
  [5, 2, 3]
  
  [5]
  [5,2]
  [5,2,3]
  [2]
  [2,3]
  [3]
  Notice Here I didn't include [5, 3] which is not a sub-array..
*/
function generateSubarrays(arr) {
  // outermost loop states the starting point for sub-array
  for (let start = 0; start < arr.length; start++) {
    // middle loop for the end point for sub-array
    for (let end = start; end < arr.length; end++) {
      let a = [];
      // to push all the elements from starting point to end point and then print them!!
      for (let elements = start; elements <= end; elements++) {
        a.push(arr[elements]);
      }
      console.log(a);
    }
  }
}
generateSubarrays([5, 2, 3]);

/*
  What are the total number of subarrays ?
  Example - [5,2,3]
  lets say the array consists of n elements. Therefore the 
  last element will have just one subarray ([3]). Similarly the
  second-to-last element will have 2 subarrays ([2], [2, 3]).
  This implies that the 1st element of the array will have 
  n subarrays([5], [5,2], [5,2,3] first element 5 has 3
  subarrays which the length of the array).
  total number of subarrays =
  n + (n - 1) + (n - 2) + .... + 3 + 2 + 1
  which is just sum of first n natural numbers 
  (n*(n + 1))/2
 */
/*
  Time complexity: O(n^3)
  space complexity: O(n)
*/
