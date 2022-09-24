/*
   Implementing Stack using Arrays
    1. push(val) to insert values on top of the stack
    2. pop() to remove values from the top of the stack
    3. top() display current value at the top of stack
    4. show() to display all the values in the stack(top to bottom)

    I am implementing the top function with the alias peek() because js is getting confused whether I am calling top property or top method LOL!

    push operation: O(1) time
    pop operation: O(1) time
*/
class Stack {
  constructor() {
    this.data = [];
    this.length = 0;

    /*
      YOU SHOULD NOT WRITE : this.length = this.data.length 
      because you are inside a constructor function
      which is called ONLY ONCE when you create/initialize an object.
      this.length = this.data.length statement will 
      FIX this.length = 0 as at the time of creating the object this.data
      was an empty array.
    */

    this.top = -1;
  }
  push(val) {
    this.data[++this.top] = val; //using pre increment
    this.length++;
    return this.data;
  }
  pop() {
    if (this.top === -1) {
      console.log('Stack Underflow');
      return false;
    } else {
      this.length--;
      this.top--;
      return this.data.pop(); // returning the poped or deleted element
    }
  }
  peek() {
    if (this.top !== -1) {
      console.log(this.data[this.top]);
      return this.data[this.top];
    }
    console.log('stack is empty');
    return false;
  }
  show() {
    for (let i = 0; i <= this.top; i++) {
      console.log(this.data[i]);
    }
  }
  isEmpty() {
    if (this.top <= -1) {
      console.log('The stack is empty');
      return true;
    }
    return false;
  }
}
let color = new Stack();
color.push('R');
color.push('G');
color.push('B');
color.peek();
color.pop();
console.log(color);
color.show();
console.log(color.isEmpty());
