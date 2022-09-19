/*
   Implementing Stack using Linked List
    1. push(val) to insert values on top of the stack
    2. pop() to remove values from the top of the stack
    3. top() display or show current value at the top of stack
    4. show() to display all the values in the stack(top to bottom)
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    // add value on the top
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    } else {
      let traverse = this.head;
      // to reach the topmost/last node in the stack
      while (traverse.next) {
        traverse = traverse.next;
      }
      traverse.next = new Node(val);
      this.tail = traverse.next;
    }
    this.length++;
  }
  pop() {
    // remove val/element from the top of the stack
    if (!this.head) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let prev = this.head;
      let curr = this.head.next;
      while (curr.next) {
        curr = curr.next;
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
      this.length--;
    }
  }
  show() {
    let traverse = this.head;
    while (traverse) {
      console.log(traverse.val);
      console.log();
      traverse = traverse.next;
    }
  }
  top() {
    if (!this.head) return null;
    console.log(this.tail.val);
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
books.top();
books.pop(); // the selfish gene out
books.top();
