function orderAgnosticBinarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let isASC = false;
  if (arr[start] < arr[end]) {
    isASC = true;
  }
  if (isASC) {
    binarySearch(arr, num);
  } else {
    binarySearchDecreasing(arr, num);
  }
}
orderAgnosticBinarySearch([90, 75, 45, 32, 23, 10, 5], 75);
function binarySearchDecreasing(arr, num) {
  console.log('Array is in decreasing order!');
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === num) {
      console.log('found num at ' + mid + 'st index');
      return num;
    } else if (arr[mid] < num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log('Number not found');
  return false;
}
function binarySearch(arr, key) {
  console.log('Array is in increasing order.');
  // to check for empty array
  if (arr.length < 1) return null;
  let start = 0;
  let end = arr.length - 1;
  // starting and ending indexes respectively

  let mid; // middle index
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    // as indexes cannot be real numbers only positive integers. Math.floor() floors down the number or removes the decimal part.
    if (arr[mid] === key) {
      console.log(`${key} found at index ${mid}`);
      return;
    } else if (arr[mid] < key) {
      start = mid + 1;
      // if middle value is smaller than key start from mid + 1
    } else {
      end = mid - 1;
      // if middle value is greater than key end at mid - 1
    }
  }
  console.log(`${key} NOT FOUND!!`);
  return 1;
}
