function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    // smallest number in the right side of the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min_index] > arr[j]) {
        min_index = j;
      }
    }
    // swapping smallest with current
    let temp = arr[min_index];
    arr[min_index] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}
selectionSort([1, 5, 10, 2, 3, 100, 18, 72]);
