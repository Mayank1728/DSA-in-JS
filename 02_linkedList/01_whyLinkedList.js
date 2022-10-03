/*
  Why do we need linkedList ?

  Problem with traditional ARRAYS

    1. arrays are of fixed size(in c and c++). So when 
        ARRAY IS COMPLETELY FILLED BUT WE STILL want to ADD ELEMENT to it
          1.1 create new array with prev array's size + 1
          1.2 copy all the contents of the previous array into the newer array
          1.3 then add element to the newer array
    
    2. Similar problem arises when we want to delete an element
    
    This insertion and deletion problem costs us Time: O(n) and space: O(n);

    Therefore, we use linkedlist because it offers O(1) time complexity
    for insertion and deletion.

    TRADEOFFS:
      1. Arrays have very fast lookup time and random access of elements(you can
          access elements from their index).
          IN LinkedList you CANNOT ACEESS elements based on index.
*/
