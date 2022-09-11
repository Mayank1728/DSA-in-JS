// Binary Search
// pre-requisite: Binary Search can work ONLY on SORTED ARRAY
function binarySearch(arr, value) {
  // to check for empty array
  if (arr.length < 1) return null;
  let start = 0;
  let end = arr.length - 1;
  // starting and ending indexes respectively

  let mid; // middle index
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) {
      console.log(`${value} found at index ${mid}`);
      return;
    } else if (arr[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(`${value} NOT FOUND!!`);
  return 1;
}
binarySearch([4, 32, 46, 78, 91], -78);
