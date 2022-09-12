// As the name suggests the greatest value will bubble at the end of the array
function bubbleSort(arr) {
  let swap = 0;
  do {
    // On each pass swap is initialized to 0.
    swap = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      // swap if current element (arr[i]) > next element(arr[i + 1])
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap++;
      }
    }
  } while (swap > 0);
  console.log(arr);
}
bubbleSort([5, 4, 3, 2, 1, 10, 4, 2]);
