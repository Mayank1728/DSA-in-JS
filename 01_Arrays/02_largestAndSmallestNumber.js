/*
  Find the largest and smallest number in an array.
*/

// Method 1: Intutive approach
function largestAndSmallest(arr) {
  // if array isn't empty
  if (arr.length > 0) {
    let smallest = Infinity;
    // At first, whichever number you compare smallest against it will be greater
    let largest = -Infinity;
    // At first, whichever number you compare greatest against it will be smaller

    // Infinity and -Infinity are NOT VALUES they are used for comparisons only.
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }
    console.log(`The smallest number is ${smallest}`);
    console.log(`The largest number is ${largest}`);
  }
}
let a = [1, 5, 3, 5, 10, 4, 2];
largestAndSmallest(a);

// Time complexity -> O(n)
// Space complexity -> O(1)

// Method 2: using Inbuit Math.max() and Math.min()
console.log(Math.max(...a), Math.min(...a));
console.log(...a);
/*
  Math.max() doesn't accept array as an argument.
  correct format is 1 5 3 4 2
  incorrect format is [1, 5, 3, 4, 2]
  we can transform array to correct format using spread operator -> ... (3 simple dots).
*/
