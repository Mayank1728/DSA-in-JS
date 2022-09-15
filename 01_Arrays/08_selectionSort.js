function selectionSort(arr) {
  /*
    Pseudocode:
    1. outer for-loop to move the current element on each itration
    2. inner for-loop to scan the array starting the from current element to the end of the array for minIndex
    3. now swap current element with minIndex;
  */
  // length of the array is n then it will go from 0 to n - 2 cuz last element
  // is already sorted
  for (let i = 0; i < arr.length - 1; i++) {
    let currIndex = i;
    let minIndex = currIndex;
    for (let j = currIndex; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // swap currIndex with minIndex
    // Method 1. [arr[minIndex], arr[currIndex]] = [arr[currIndex], arr[minIndex]]
    // Method 2. swap using temp, without using temp etc
    const temp = arr[currIndex];
    arr[currIndex] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(arr);
}
selectionSort([5, 10, 2, 100, 18, -5, 0, 5, 72]);
/*
    Time complexity => O(n^2) why ?

    outer loop runs : n times
    inner loop runs : whatever the value of inner loop is at that time - 1
    This means total no of comparisons are
    when
    i       j runs
    0       n times
    1       n - 1 times
    2       n - 2 times
    .
    .
    .
    n - 4   n - (n - 4) => 4 times
    n - 3   n - (n - 3) => 3 times
    n - 2   n - (n - 2) = > 2 times

    => 2 + 3 + 4 + 5 + .... + (n - 2) + (n - 1) + n
    => (n(n + 1)/ 2) - 1
    => ((n^2 + n)/2) - 1
    => for very very very large values of n we CAN IGNORE CONSTANTS and less dominant terms
    => n^2

  Space Complexity => O(1) constant space
*/
