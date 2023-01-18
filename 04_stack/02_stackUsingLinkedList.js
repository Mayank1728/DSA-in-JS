/*
   Implementing Stack Class using Linked List

    1. push(val) : pushes value at the top of stack
    2. pop() : removes topmost value from the stack
    3. top() : displays/returns the topmost value from the stack AKA peek
    4. isEmpty() : returns true if stack is empty otherwise returns false
    
    Each operation is implemented in O(1) time 
    and space used by stack is O(N) where N is no of elements.
*/

/* 
   Working of Stack class using LinkedList ?

    Traditionally Singly LinkedList looks like this
    "rose" -> "sunflower" -> "jasmine" -> "lilies" -> "Lavender"
     Head                                               Tail
   
     
    Instead of having a head and tail I have just top
    "Lavendar" -> "Lilies" -> "Jasmine" -> "sunflower" -> "rose"
      Top                                   

    As it will become easier to pop the last element and move
    move to the next node in O(1) time.

*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(val) {
    let currNode = new Node(val);
    currNode.next = this.top;
    this.top = currNode;
    this.length++;

    // Time : O(1)
  }
  pop() {
    if (!this.top) {
      console.log('The Stack is EMPTY!!');
      return false;
    }
    const removed = this.top.val;
    this.top = this.top.next;
    console.log(`${removed} was popped!!`);
    this.length--;
    return removed;

    // Time : O(1)
  }
  peek() {
    if (!this.top) {
      console.log('The Stack is EMPTY!!');
      return false;
    }
    console.log(this.top.val);
    return this.top.val;

    // Time : O(1)
  }
  isEmpty() {
    return this.top === null;

    // Time : O(1)
  }
}

let books = new Stack();
books.push('12 Rules for Life by Jordan B. Peterson');
books.push('War of Art by Steven Pressfield');
books.push('How to fail at almost everything & still win big');
books.push('Richest Man in babyloan');
books.push('48 Laws of power');
books.push('Sapiens A brief history of humankind');
books.push('Guns Germs and Steel');
books.push('Predictably irrational');
books.push('Extreme ownership');
books.push('The selfish gene');
books.pop(); // the selfish gene out
books.peek();
console.log(books.length);
console.log(books);
