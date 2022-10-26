// The Array should be CONTINIOUS to apply cyclic sort

let arr = [3, 5, 2, 1, 4];
function cyclicSort(arr) {
  let ptr = 0;
  let len = arr.length;
  while (ptr < len) {
    if (arr[ptr] === arr[arr[ptr] - 1]) {
      ptr++;
    } else {
      let temp = arr[arr[ptr] - 1];
      arr[arr[ptr] - 1] = arr[ptr];
      arr[ptr] = temp;
    }
  }
  console.log(arr);
  // Time : O(N) at max N swaps are required
  // Space : O(1)
}
cyclicSort(arr);

// What is stopping us from doing this arr[ptr] = ptr + 1 ?
// why can't we do this ?
