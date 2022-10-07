// Merge Sort
/*

*/
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let L = [];
  let R = [];

  for (let i = 0; i < mid; i++) {
    L[i] = arr[i];
  }
  // you can also use L = arr.slice(0,mid)

  for (let j = mid; j < arr.length; j++) {
    R[j - mid] = arr[j];
  }
  // you can also use R = arr.slice(mid)

  L = mergeSort(L);
  R = mergeSort(R);
  // Very Important
  return mergeArray(L, R);
}
// function to sort the 2 merged array
function mergeArray(L, R) {
  let arr = [];
  let ap = 0;
  let lp = 0;
  let rp = 0;
  while (lp != L.length && rp != R.length) {
    if (L[lp] < R[rp]) {
      arr[ap++] = L[lp++];
    } else {
      arr[ap++] = R[rp++];
    }
  }
  while (lp != L.length) {
    arr[ap++] = L[lp++];
  }
  while (rp != R.length) {
    arr[ap++] = R[rp++];
  }
  console.log(arr);
  return arr;
}
mergeSort([5, 1, 3, 4, 6, 9]);

/*
    1. return statement
        1.1 both for length 1
        1.2 after merging L and R
    2. spelling of length
    3. can we work with indicies ?
*/
