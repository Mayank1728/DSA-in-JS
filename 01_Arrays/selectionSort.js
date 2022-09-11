function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let exchangeWith = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[exchangeWith] > arr[j]) {
        exchangeWith = j;
      }
      /*
       There can be more than 1 numbers less than current element to find the smallest among those we need to compare it against exchangeWith as it will update the values. 
       
       Example [10, 13, 15, 5, 2, 7].
       If I had used arr[i] > arr[j] it would have made the exchangeWith variable
       1. arr[exchangeWith] = 5 as 5 < 10
       2. arr[exchangeWith] = 2 as 2 < 10
       3. arr[exchangeWith] = 7 as 7 < 10
       and would have swapped 10 and 7 instead of 10 and 2.
       
       So I used arr[exchangewith] > arr[j] as it will update the smallest value we are comparing against.
       Ex- [10, 13, 15, 5, 2, 7]
       1. arr[exchangeWith] = 5 as 5 < 10
       2. arr[exchangeWith] = 2 as 2 < 5
       3. arr[exchangeWith] = 2 as still 2 < 7
       Which will result in swapping 10 and 2.
      */
    }
    // swapping smallest with current
    let temp = arr[exchangeWith];
    arr[exchangeWith] = arr[i];
    arr[i] = temp;
  }
  console.log(arr);
}
selectionSort([1, 5, 10, 2, 3, 100, 18, 72]);
