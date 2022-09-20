/*
   Implementing Stack using Arrays
    1. push(val) to insert values on top of the stack
    2. pop() to remove values from the top of the stack
    3. top() display current value at the top of stack
    4. show() to display all the values in the stack(top to bottom)

    I am implementing the top function with the alias
    peek() because js is getting confused whether
    I am calling top property or top method LOL!
*/
class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
    this.top = -1;
  }
  push(val) {
    this.data[++this.top] = val;
    this.length++;
    return this.data;
  }
  pop() {
    if (this.top === -1) {
      console.log('Stack Underflow');
      return 'Stack Underflow';
    } else {
      this.length--;
      this.top--;
      return this.data.pop();
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
}
let color = new Stack();
color.push('R');
color.push('G');
color.push('B');
color.peek();
color.pop();
console.log(color);
color.show();
