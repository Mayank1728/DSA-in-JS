// Insertion sort
/*
 PseudoCode
 we consider 1 element to be sorted and the right part to be unsorted
  | shows the partition for Left part and Right part of the array
  Ex - [5,4,2,3,1]
  [5|,4,2,3,1]
  [4,5|,2,3,1]
  [2,4,5,|3,1]
  [2,3,4,5|,1]
  [1,2,3,4,5]

*/

// TC (test case [2, 4, 5, 3])
//  0  1  2  3 (indexes)
// [2, 4, 5, 3]
// [2, 4, 5, 5]
// [2, 4, 4, 5]
// [2, 3, 5, 5]

function insertionSort(arr) {
  //start with i = 1
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let index = i;
    for (let j = i - 1; j > -1; j--) {
      if (arr[j] > curr) {
        arr[index--] = arr[j];
        // decrease value of index after using it AKA post decrement
      } else {
        break;
      }
    }
    arr[index] = curr;
  }
  console.log(arr);
}
insertionSort([10, 20, 6, 0, 4, 5, 6, 19]);
