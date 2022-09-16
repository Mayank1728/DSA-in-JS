function bubbleSort(arr) {
  let swap;
  let passes = 0;
  do {
    swap = 0;
    for (let i = 0; i < arr.length - passes - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swap++;
      }
    }
    passes++;
  } while (swap != 0);
  console.log(arr);
}
bubbleSort([5, 4, 3, 50, 43, 2, 4, 1]);
