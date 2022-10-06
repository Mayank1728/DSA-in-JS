// Linear Search
/*
  Linear search searches for a value one-by-one scanning the complete array.
    1. if value is found => shows the index and stops searching.
    2. if value is NOT FOUND in the complete array => return 1. 
    
*/
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    // Always use strict equality check === for comparing values
    if (arr[i] === value) {
      console.log(`${value} FOUND at ${i}th position`);
      return;
      // when and if element if found it will stop searching and display index
    }
  }
  console.log(`${value} NOT found`);
  return 1;
}
linearSearch([5, 6, 10, 1, 2, 3, 4], 4);
linearSearch(['mars', 'venus', 'earth', 'mercury', 'jupiter'], 'neptune');

// Time Complexity -> O(n) : How does the TIME grows as the size of input array is increased ?
// Space Complexity -> O(n) : How does the SPACE grows as the size of input array is increased ?

/*
  Do you know?

   In js, arrays & objects are passed by reference and everything else is passed by value. This means when you pass an array/object inside a function, the modification is done on the actual array/object, however, when you pass anything else- string, Number etc data types- values are copied, then modification is done on the copied values not on the original values.
*/
