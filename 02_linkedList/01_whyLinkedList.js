/*
  Why do we need linkedList ?

  Problem with traditional ARRAYS

    1. arrays are of fixed size(in c and c++). So when an
        ARRAY IS COMPLETELY FILLED BUT WE STILL want to ADD ELEMENT to it
        Under the hood what happens in C++ is it
          1.1 creates a new array, TWICE THE SIZE of the previous one.
          1.2 copies all the contents of the previous array into the newer array
          1.3 and then adds the element to the newer array
    
    2. Similar problem arises when we want to delete an element
        When you delete an element from in between the array, we need to
        shift elements after the deleted element by -1 place.
    

    COST of INSERTION: O(n) 
          Worst case when the array is full and I have to insert an element
    

    COST of DELETION: O(n) 
          Worst case when I delete the first element, and now we need to shift all the              elements to the left.

    Therefore, we use linkedlist because it offers
          O(1) Insertion
          O(1) Deletion (ONLY when you remember the tail node)

    TRADEOFFS:
      1. Arrays have very fast lookup time and random access of elements(you can
          access elements from their index).
          IN LinkedList you CANNOT ACEESS elements based on index.
*/
