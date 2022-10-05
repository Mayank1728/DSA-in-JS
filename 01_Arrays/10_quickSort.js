function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return;
  }
  let l = start;
  let r = end;
  let m = Math.floor((l + r) / 2);
  let pivot = arr[m];
  while (l <= r) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r--;
    }
    if (l <= r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  console.log(`${pivot} in ` + arr);
  // Now partition
  quickSort(arr, start, r);
  quickSort(arr, l, end);
}
quickSort([8, 5, 2, 9, 5, 6, 3]);
