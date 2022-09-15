// As the name suggests the greatest value will bubble at the end of the array
/*
  Pseudocode
  1. If size of the array is n then it will take exacty n-1 PASSES to sort
     
       Ex  arr: [20, 30, 40, 10] n = 4
        Pass 1: [20, 30, 10, 40]
        Pass 2: [20, 10, 30, 40]
        Pass 3: [10, 20, 30, 40]
     
     It will always take exactly n-1 pases(3 passes in above example) to sort the array
    Therefore the outer for loop runs n-1 times
  
  2. Now inner for loop j = 0 and goes till j < arr.length - 1 - passes. BUT WHY ??

     j < arr.length-1 is there because when j = arr.length-1 then j+1 becomes arr.length. This j+1 index is out of bounds.
     BUT WHY -passes also?
       
        Ex arr: [20, 30, 40, 10] n = 4
        Pass 1: [20, 30, 10,| 40]  1 element is in its correct position
        Pass 2: [20, 10,| 30, 40]  2 element is in its correct position
        Pass 3: [10,| 20, 30, 40]  3 element is in its correct position
        The 1 remaining element is always in its sorted position.
        
    j < (arr.length - passes)  because after 1st pass we don't need to check the last element.
    Similarly after 2nd pass we don't need to check the 2nd to last element and so on...

*/
function bubbleSort(arr) {
  let passes = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - passes; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    passes++;
  }
  console.log(arr);
}
bubbleSort([5, 10, 134, 2, 3, 8, 16, 4, 2]);
// Time complexity: O(n^2)
