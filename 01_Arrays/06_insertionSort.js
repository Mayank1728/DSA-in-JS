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

// sample TC (test case [2, 4, 5, 3])
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

// Time complexity : O(n^2) why ?
/*
  lets say all the elements are sorted except the last one;
  Now no of comparisons made to sort it in the worst case(this
  means that the last element is the smallest number) is n - 1.
  Similarly for 2nd to last element no of comparisons made in 
  worst case is n - 2 and so on.... 
  Only 1 comparison is made when i = 0
  Therefore time taken in the worst case is 
  = (n-1) + (n-2) + (n-3) + .... + 3 + 2 + 1
  = (n * (n-1)) / 2
  Considering ONLY the MOST DOMINANT term
  Time Complexity is O(n^2)
  
*/

// Space complexiy : O(1)
