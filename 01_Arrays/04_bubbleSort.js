// As the name suggests the greatest value will bubble at the end of the array
/*
    3 Things to consider in bubble sort

        1. Swap Variable
            We Know that if Swaps REMAIN 0, the array is sorted
            Else it needs to be sorted
        
        2. Passes Variable
            After each pass the largest value will bubble at the end

        MOST IMPORTANT PART this optimizes our code

        3. Why does the inner for-loop run (curr < arr.length - passes - 1) times ?
            3.1 WHY arr.length - 1 ?
                Because we are comparing curr and next element. If we run the
                loop till curr < arr.length the PROBLEM ARISES ON LAST PASS:
                  curr = arr.length - 1 (curr is on last index)
                  next will be curr + 1
                  this means next = arr.length
                  BUT the index is from 0 to arr.length - 1
                  This means next will go out of bounds
                Therefore we run curr < arr.length - 1 so that next will be
                at max equal to arr.length - 1;
            
            3.2 WHY arr.length - 1 - passes? 
                  we subtract passes because after each pass the element at the
                  last is sorted.
                  Ex - Array : [40, 30, 20, 10] pass = 0 will run till end
                  Pass 1 : [30, 20, 10, 40] pass = 1
                            This means 40 is at correct pos no need to check 40
                  Pass 2 : [20, 10, 30, 40] pass = 2
                            This means last 2 elements (30, 40) are sorted
                            So no need to check 30 and 40
                  Pass 3 : [10, 20, 30, 40] similarly pass = 3
                            This means last 3 elements (20, 30, 40) are sorted
                  ONLY 1 element is left so No need to check 10 


*/
function bubbleSort(arr) {
  let swap = 0;
  let passes = 0;
  do {
    swap = 0;
    for (let curr = 0; curr < arr.length - passes - 1; curr++) {
      let next = curr + 1;
      if (arr[curr] > arr[next]) {
        let temp = arr[curr];
        arr[curr] = arr[next];
        arr[next] = temp;
        swap++;
      }
    }
    passes++;
  } while (swap != 0);
  console.log(arr);
}
bubbleSort([5, 10, 134, 2, 3, 8, 16, 4, 2]);
// Time complexity: O(n^2)
/*
    Why O(n^2) ?

    lets consider the worst case that the array is sorted in dec order
    Ex - Array : [40, 30, 20, 10]
        No of comparisons did = 3
            1. 40 checked with 30
            2. 40 checked with 20
            3. 40 checked with 10

        Pass 1 : [30, 20, 10, 40] 40 is at correct position
          No of comparisons = 2
            1. 30 checked with 20
            2. 30 checked with 10
          30 was NOT CHECKED with 40 as it is already sorted

        Pass 2 : [20, 10, 30, 40] now 30, 40 are at correct position
          No of comparisons = 1
            1. 20 checked with 10
          20 was NOT CHECKED with 30, 40 as they are already sorted

        Pass 3 : [10, 20, 30, 40] now 20, 30, 40 at correct position

        ONLY 1 element is left so No need to check 10

    Therefore, array of length  4
          Comparisons/timeTaken = 3 + 2 + 1 = 6
    Similarly in WORST CASE of N elements
          Comparisons/timeTaken 
          = (N - 1) + (N - 2) + (N - 3) + .. + 1
          = N(N - 1)/2
  
    So, Time complexity = O(n^2)
*/
