// Merge Sort
/*
  Idea: 
    Merge sort works on this beautiful idea "ARRAY OF 1 ELEMENT IS ALWAYS SORTED".

  Working: 
    You keep on dividing the array until you reach subarrays of 1 element.
    After reaching subarray of size 1 you start combining them.
    
                                [5,3,2,8,4,9]
                            [5, 3 ,2]    [8, 4, 9]
                        [5, 3]  [2]       [8, 4]  [9]
                      [5] [3]  [2]           [8] [4]  [9]
                        [3,5]  [2]         [4,8] [9]
                            [2,3,5]      [4,8,9]
                                [2,3,4,5,8,9]


    
*/
function mergeSort(arr) {
  // return the array if its length is 1
  if (arr.length === 1) {
    return arr;
  }

  // find the mid to split it in 2 halves
  let mid = Math.floor(arr.length / 2);
  let L = [];
  let R = [];

  // creating left half
  for (let i = 0; i < mid; i++) {
    L[i] = arr[i];
  }
  // you can also use L = arr.slice(0,mid)

  // creating right half
  for (let j = mid; j < arr.length; j++) {
    R[j - mid] = arr[j];
  }
  // you can also use R = arr.slice(mid)

  /* 
    why this step ?
      after dividing the array in 2 halves we recursively call the function on 
      the left half as well as the right half.
      when you will reach 1 sub-array L = [5] 
  */
  L = mergeSort(L);
  R = mergeSort(R);

  /*
    The function will return arr when it reaches 1 element subarray.
    What will you do with the array returned from mergedArray ?
      You need to return it so that the lower callstack, so that now in the previous stack
      L = [3, 5] and now R = mergesort([2]) gets executed.
    Thats why we write return mergeArray(L, R).
  */
  return mergeArray(L, R);
}
// function to sort the 2 merged array
function mergeArray(L, R) {
  let arr = [];
  let ap = 0; // pointer for arr
  let lp = 0; // pointer for L
  let rp = 0; // pointer for R

  // as the length of L and R may vary we use to know which array is traversered first
  while (lp != L.length && rp != R.length) {
    if (L[lp] < R[rp]) {
      arr[ap++] = L[lp++];
    } else {
      arr[ap++] = R[rp++];
    }
  }
  // whichever array's elements are left, they are pushed into arr.
  while (lp != L.length) {
    arr[ap++] = L[lp++];
  }
  while (rp != R.length) {
    arr[ap++] = R[rp++];
  }
  return arr;
}
console.log(mergeSort([5, 1, 3, 4, 6, 9]));

// Time Complexity: O(NLogN)
// Space Complexity: O(NLogN)
