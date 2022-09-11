/*
   In js arrays, objects are passed by reference and everything else is passed by value. This means when you pass an array/object inside a function, the modification is done on the actual array/object,however, when you pass anything else- string, Number etc data types- values are copied, then modification is done on the copied values not on the original values.
*/
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    // Always use strict equality check === for comparing values
    if (arr[i] === value) {
      console.log(`${value} FOUND at ${i}th position`);
      return 1;
      // when and if element if found it will stop searching and display index
    }
  }
  console.log(`${value} NOT found`);
  return 0;
}
linearSearch([5, 6, 10, 1, 2, 3, 4], 4);
linearSearch(['mars', 'venus', 'earth', 'mercury', 'jupiter'], 'neptune');

// Time Complexity -> O(n)
// How does the time grows as the size of input array is increased ? Ans: Linearly
// Space Complexity -> O(n)
// How does the space grows as the size of input array is increased ? Ans: Linearly
