/*
   What is stack ?
   Stack is a LIFO(Last In First Out) Data Structure. 
   You insert and delete element from ONE END AKA TOP.

   Let's imagine a Column of tennis ball. These balls are stacked on top
   of each other. Now, the ball which is placed at last will 
   come out first. 
   This is LIFO. Remember you can only insert at the top and 
   remove from the top.

   Why do we use Stack ?
      We use stack when we want CONSTANT TIME push (adding element)
      and CONSTANT TIME pop (removing element) operations.
      NOTE : We cannot access the elements in between the stack.
             We can access only the topmost element.
      Time complexity: Push O(1), Pop O(1), Searching O(N)
      Space complexity: O(N)


   Real Life Examples of Stack
   1. Column of tennis balls.
   2. Bread packet
   3. ctrl + Z (Undo option)
   4. going to previous or last visited webpage in firefox
   

   Stack Class can be implemented with 
   1. Arrays
   2. LinkedLists


   Where is Stack used in programming ?
      1. Function calls : 
            How does the program remembers in which order functions were
            called and which function it needs to return back to. It is 
            by using the stack.
      
      2. Call Stack : 
            Fuction calls present in the stack memory during recursive calls.
      
      3. Implementing Depth First Search[DFS] :
            Stack is used for traversing graphs using DFS approach.

      4. Evulating expressions: 
            How do operations like add, sub etc happen inside the computer ? 
            Normal expressions(Infix) are converted into postFix or preFix.
            Infix(Human readable) : 2 + 3 / 6 * 9 = (2 + ((3 / 6) * 9))
               <operand> <operator> <operand>
            PostFix:  2 3 6 / 9 * + ()
               <operand> <operand> <operator>
            PreFix :  + 2 * / 3 6 9
               <operator> <operand> <operand>
            Watch mycodeschool videos for more Information.

*/
