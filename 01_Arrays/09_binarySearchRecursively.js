// implementation of binary search recursively
function binarySearch(value, arr, start = 0, end = arr.length - 1) {
  // when start is greater than end
  // this means VALUE NOT FOUND

  if (start > end) {
    console.log('Value not found');
    return;
  }

  // similar to normal binarySearch find the mid
  let mid = Math.floor((start + end) / 2);

  // if mid === value, print the index
  if (arr[mid] === value) {
    console.log(`Value found at index ${mid}`);
    return;
  }

  // if value is less than mid, search the LEFT HALF
  else if (arr[mid] > value) {
    binarySearch(value, arr, start, mid - 1);
  }

  // if the value is greater than mid, search the RIGHT HALF
  else {
    binarySearch(value, arr, mid + 1, end);
  }
}
binarySearch(55, [2, 5, 9, 10, 34]);
