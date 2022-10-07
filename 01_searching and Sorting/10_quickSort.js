// Here we take middle element as the pivot
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }
  let left = start;
  let right = end;
  let mid = Math.floor((left + right) / 2);
  let pivot = arr[mid];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[right], arr[left]] = [arr[left], arr[right]];
      left++;
      right--;
    }
    console.log(pivot, arr);
  }
  quickSort(arr, start, right);
  quickSort(arr, left, end);
}

quickSort([8, 5, 2, 9, 5, 6, 3]);
