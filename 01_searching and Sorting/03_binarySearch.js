// Binary Search

// pre-requisite: Binary Search WORKS ONLY ON SORTED ARRAYS.

/*
                            *** Binary Search Intuition ***
   let's say brian and bond are playing a guessing game. brian thinks of a number between [1 - 100] inclusive. 
   Now bond has to guess that number. On each guess, Brian provides feedback on whether the number is greater than
   the actual number or less than the actual number.
   
   Conversation goes like this ->
   
   brian thinks the number 20

   bond: 1
   brian: too low!
   bond: 2
   brian: too low!
   bond: 3
   brian: too low!
   .
   .
   .
   ...
   after 19 guesses 
   bond: 20
   brian: correct!!
   It took bond 20 guesses

   BUT what if the number was 100 ?
   It would become so booring that you can't even imagine.

   But what if he uses this approach
   
   brian thinks of the number: 79

   bond: 50 (as 50 is the mid of 1 - 100)
   brian: too low!
   bond: 75 (as the number must be between 50 - 100 and its mid is 75)
   brian: too low!
   bond: 87
   brian: too high!
   bond: Thinking number has to be between 75 and 87
   bond: 81
   brian: too high!
   bond: 78
   brian: too low!
   bond: 79
   brian: BINGO!!

   Everytime bond divided the number in 2 halves. let's see how
   1. 1-100 -> 101/2 -> 50.5 -> 50 **too low!
   2. 50-100 -> 150/2 -> 75 -> **too low!
   3. 75-100 -> 175/2 -> 87.5 -> 87 **too high!
   4. 75-87 -> 162/2 -> 81 **too high!
   5. 75-81 -> 156/2 -> 78 **too low!
   6. 78-81 -> 159/2 -> 79.5 -> 79 BINGO!!
   It took just 6 steps rather than 79 steps from the first approach.

*/
function binarySearch(arr, key) {
  // to check for empty array
  if (arr.length < 1) return null;
  let start = 0;
  let end = arr.length - 1;
  // starting and ending indexes respectively

  let mid; // middle index
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    // as indexes cannot be real numbers only positive integers. Math.floor() floors down the number or removes the decimal part.
    if (arr[mid] === key) {
      console.log(`${key} found at index ${mid}`);
      return;
    } else if (arr[mid] < key) {
      start = mid + 1;
      // if middle value is smaller than key start from mid + 1
    } else {
      end = mid - 1;
      // if middle value is greater than key end at mid - 1
    }
  }
  console.log(`${key} NOT FOUND!!`);
  return 1;
}
binarySearch([4, 32, 46, 78, 91], -78);
binarySearch([4, 32, 46, 78, 91], 91);

// Time complexity -> O(logN) base 2
// Space complexity -> O(1) constant
/*
  Why is the time complexity logN you ask ??
  lets say size of the array is N.
  on each pass the range decreases to 
  1. N/2 = N/(2^1)
  2. N/4 = N/(2^2)
  3. N/8 = N/(2^3)
  ...
  on some Kth pass you will reach the key
  k. 1 =  N/2^k
 This implies N = 2^k
 taking log base 2 on both sides
 log N = k  (as log 2 with base 2 = 1)
*/
